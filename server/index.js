const express = require('express');
const mysql = require('mysql');

const app = express();
app.listen('3001',()=>{
    console.log("server is running on port 3001");
})