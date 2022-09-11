const express = require('express');
const mysql = require('mysql');

const app = express();
app.listen('3001',()=>{
    console.log("server is running on port 3001");
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'db_daisy_boutique'
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log(" Database Connected!");
  });

  app.get("/getpr",(req,res)=>{
    con.query("SELECT * FROM `tb_product`",function(err,result,fields){
        if(err) throw err; 
        res.send(result);
    })
  })