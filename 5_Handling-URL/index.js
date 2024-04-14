const url = require('url');
const fs = require('fs')
const http = require('http');

//creating the http server
const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()} ${req.url}\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end(log);
    })
});

myServer.listen(9000,()=>console.log("Your server is UP and Running"));