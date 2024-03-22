const mongoose = require("mongoose")

const connectDB = (uri) =>{
    console.log("Connected to Database")
    return mongoose.connect(uri);
    
}
module.exports = connectDB;