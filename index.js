const express = require('express')
const app = express();

app.get('/',function(req,res) {
    res.send('abcdefgh')
});

app.listen('12345');