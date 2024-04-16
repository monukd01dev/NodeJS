const http = require('http');
const fs = require('fs');
const url = require('url');
const services = require('./services');
const { bookStore } = require('./bookStore');


const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()} at ${req.url}\n`;
    const myUrl = url.parse(req.url,true)

    fs.appendFile("log.txt",log,(err,data)=>{
        switch (myUrl.pathname) {
            case "/":
                res.end("Home");
                break;
            case "/book":
                if(Object.keys(myUrl.query).length!==0){
                    res.end(JSON.stringify((services.findById((myUrl.query).bookid)) || {data : "book not found"}));
                }else{
                    res.end("book");
                }
                break;
            case "/books":
                res.end(JSON.stringify({bookStore}));
                break;
            case "/delete":
                if (Object.keys(myUrl.query).length !== 0) {
                    const bookid = parseInt((myUrl.query).bookid);
                    const book = JSON.stringify(services.findById(bookid)) || false;
                    if(book){
                        services.deleteBook(JSON.parse(book));
                        res.end(book)
                    }else{
                        res.end("Book Not Found!!")
                    }
                    
                  } else {
                    res.end("Delete");
                }
                break;
            default:
                res.end("404 Page Not Found")
                break;
        }
    })
    
});

myServer.listen(8080,()=>{
    console.log("Server is UP and Running");
});