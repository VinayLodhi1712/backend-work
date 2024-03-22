const { query } = require("express");
const Product = require("../models/productmodels")
const getAllProductsControllers = async (req,res)=>{
    const {company,name,featured,sort,select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
        console.log(queryObject.company)
    }

    if(featured){
        queryObject.featured = featured;
    }
    if(name){
        queryObject.name= { $regex: name, $options: "i"};
        console.log(queryObject.name)
    }
    let apiData = Product.find(queryObject)
    if(sort){
        let sortfix = sort.replace(",", " ")
        apiData = apiData.sort(sortfix)
    }
    if(select){
        let selectfix = select.replace(",", " ")
        apiData = apiData.select(selectfix)
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 1;

    let skip = (page - 1) * limit;
    let apidata = apidata.skip(skip).limit(limit)
    console.log(queryObject)
    
    const mydata = await apiData;
    res.status(200).json({ mydata , nbHits: mydata.length})
}

const getAllProductsTestingControllers = async(req,res)=>{
    const mydata = await Product.find(req.query).sort("price")
    res.status(200).json({ mydata })
}

module.exports = {getAllProductsControllers, getAllProductsTestingControllers}