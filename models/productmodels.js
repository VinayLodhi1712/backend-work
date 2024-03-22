const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type:Number,
        default: 4.9,
    },
    Createdat:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","Redmi"],
            message:`{VALUE} is not supported`,
        }
    },

})

module.exports = mongoose.model('Product',ProductSchema)