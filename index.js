const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () =>{
    console.log("this is my first express experience");
});

app.get('/' ,(reg, res) => {
    res.send("hello from Node API server Updated");
});

app.get('/api/prodcuts', (req ,res) => {
    res.send("Data Recieved");
});

mongoose.connect("mongodb+srv://tw773029:3Tg1F1NLgTLHpNVP@backend.dqt1ppr.mongodb.net/?retryWrites=true&w=majority&appName=backend")
.then(() =>{
    console.log("connected to the database!");
})
.catch(() =>{
    console.log("its not connected to the database!");
});