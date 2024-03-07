const express = require('express')
const app = express()

app.listen(3000, () =>{
    console.log("this is my first express experience");
});

app.get('/' ,(reg, res) => {
    res.send("hello form node API");
});