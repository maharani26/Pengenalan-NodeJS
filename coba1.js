const express = require('express')
const app = express();

app.get('/test',function(req,res) {
    res.send('ABCDEFGHIJ')
});

app.listen('12345');