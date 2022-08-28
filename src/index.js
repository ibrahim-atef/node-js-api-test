 const express= require("express")
 const apiServer=express()

 apiServer.get('/', function(req,res){
    res.send("hello from express")
 })

 apiServer.listen(3000,()=> console.log("api server started"));