const express = require("express");

const ds =require('../dataSource/dataSource');


const routers = express.Router();
routers.get("/", function (req, res) {
const products= ds.fetchProducts()
    res.status(200).json(products);
});

module.exports = routers;