//import modules
var express = require('express');
var app = express();

//method get
app.get('/', (req, res)=>{
    res.end("ini get XI RPL ");
});

//method post
app.post('/', (req,res)=>{
    res.end("ini post XI RPL ");
});

//inisialisasi port
app.listen('8080',(e)=>{
    console.log(e)
});