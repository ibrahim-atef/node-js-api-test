const express = require("express");
const productRouters = require('./routes/products');

const apiServer = express();

apiServer.use('/products', productRouters);

apiServer.get('/', function (req, res) {
    res.send("hello from  ex");
})

apiServer.listen(3000, () => console.log("api server started"));
