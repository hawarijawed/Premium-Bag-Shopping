const mongoose = require("mongoose");

try {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("Database Connected Successfully...!!!")})
} catch (error) {
    console.log("Database Connection error: ",error);
}

module.exports = mongoose.connection;