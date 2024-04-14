const http = require("http")
const fs = require("fs")


const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()} Received At ${req.url} \n`
    fs.appendFile("log.txt", log ,(err,data)=>{
        // res.end("aur ye ek sundar Six!")
        switch (req.url) {
            case "/":
                res.end("I am Monu KD")
                break;
            
            case "/product":
                res.end("Check my GitHub : github@monukd01dev")
                break;
            
            case "/contact":
                res.end("This is myt contact :\n1. @monukd01dev")
                break;
            
            case "/about":
                res.end("I am a well rounded developer not a language agnaustic")
                break;
            
            default:
                res.end("<h1 style='text-align:center;'>404</h1>")
                break;
        }
    })
    
})

myServer.listen(7000,()=>console.log("server is up and running!!"))