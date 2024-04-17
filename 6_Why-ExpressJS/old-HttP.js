const http = require('http');
const fs = require('fs');
// And if you want to use query parameter you need to install 'url'

function handlerMethod(req,res){
    if(req.url === "/favicon.ico") return res.end();
    const log = `${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()} ${req.method} ${req.url}\n`

    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("you are at home");
                break;

            case "/blogs":
                res.end("your blogs are here");
                break
            default :
                res.end("Route not found");
        }
    })
}

const myServer = http.createServer(handlerMethod);
myServer.listen(8080,()=>console.log("Server is up and running"));