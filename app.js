require("dotenv").config();
const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000
const products_routes = require("./Routes/ProductsRoutes")
app.get("/",(req,resp)=>{
    resp.send("Live App.js")
});

//middleware to set router
app.use("/api/products", products_routes)
const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        console.log("database")
        app.listen(PORT, ()=>{
            console.log(`${PORT} is already running`)
        });
    }
    catch(error){
        console.log(error)
        resp.status(404).send({
            status:false,
            message:"Error"
        })
    }
}
start();