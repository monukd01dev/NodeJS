// const express = require("express");
// const port = 7000;

// const app = express();

// app.get('/home',(req,res)=>{
//     res.end("i am here")
// })

// app.listen(port,()=>console.log(`your serveris starte at portno ${port}`))


const express = require('express')

const app = express();

app.get('/manage',(req,res)=>{
    res.end("What do you want to manage?" + "\nRequested route is : "+req.url);
})

app.listen('4000',()=>{
    console.log("your app is running at port number 4000");
})