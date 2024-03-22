const express = require("express");
const router = express.Router();

const {getAllProductsControllers, getAllProductsTestingControllers} = require("../Controllers/ProductsController")
router.get("/", getAllProductsControllers)
router.get("/testing", getAllProductsTestingControllers)

module.exports = router;