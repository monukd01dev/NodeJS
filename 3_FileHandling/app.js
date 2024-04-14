const { error } = require("console");
const fs = require("fs");
const path = "./NodeJS/3_FileHandling/"
// console.log(fs);

// we have two function for each operation
// 1. async
// 2. sync

// fs.writeFileSync(`${path}details.txt`,"social : @monukd01dev");
// // fs.writeFile(`${path}details.txt`,"Monu Kumar",(error)=>{})
// setTimeout(() => {
//     fs.writeFile(`${path}details.txt`,"Monu Kumar",(error)=>{})
// }, 0);

// let result = fs.readFileSync(`${path}details.txt`,"utf-8")
// console.log(result)

// setTimeout(() => {
//     fs.readFile(`${path}details.txt`,"utf-8",(err,data)=>{
//         if(err)
//             console.log(err);
//         else
//             result = data;
//     })
// }, 2000);


// setInterval(() => {
//     console.log("data : "+ result)
// }, 1000);

// setInterval(() => {
//     console.log("data : "+ result)
// }, 1000);



// basic stuff

// 2. sync
console.log("---------sync---------")
fs.writeFileSync(`${path}/books.txt`,"1.dev-heaven\n2.dev-dead");
let result = fs.readFileSync(`${path}/books.txt`,"utf-8") //it return but async will not 
console.log(result);


// 1. aync
console.log("---------async---------")
fs.writeFile(`${path}/books.txt`,"1.dev-heaven\n2.dev-dead\n3.even-hell-is-dynamic",(err)=>{})

fs.readFile(`${path}/books.txt`,"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
    }
})