require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const ownersRoute = require('./routes/ownerRoute');
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');
const indexRouter = require('./routes/index');
const expressSession = require("express-session");
const flash = require("connect-flash");
const db = require('./config/mongoose-connection');//connects the databse


const app = express();

//Middlewares setups
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(expressSession({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.messages = req.flash('error'); // make flash messages accessible in views
    next();
});

app.use(express.static(path.resolve('./public')));
app.set("view engine", "ejs");

//Handling user routes
app.get("/", (req, res)=>{
    //res.send("Aur batao");
    res.render("shop");
});
app.use("/index", indexRouter);
app.use("/owners", ownersRoute);
app.use("/users", usersRoute);
app.use("/products", productsRoute);

app.listen(process.env.PORT, ()=>{console.log(`Server Started on Port: ${process.env.PORT}`);
})