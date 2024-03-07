const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () =>{
    console.log("this is my first express experience");
});

app.get('/' ,(reg, res) => {
    res.send("hello from Node API server Updated");
});

mongoose.connect("mongodb+srv://tw773029:Trader123@@@backend.hqs2zcs.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
.then(() =>{
    console.log("connected to the database!");
})
.catch(() =>{
    console.log("its not connected to the database!");
});