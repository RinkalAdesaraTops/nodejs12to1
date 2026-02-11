var http = require('http')
var {add,minus,area} = require('./calc')
http.createServer((req,res)=>{
    res.write("Hello")
    res.write("\n Addition is "+add(10,20))
    res.write("\n Minus is "+minus(55,30))
    
    area(20)
    res.end("---End---")
}).listen("4000",()=>{
    console.log("Running on 4000 port");   
})
// console.log("Hii")
// 3 types of modules
// 1)core -inbuilt
// 2)local - user defined
// 3)Third party - must have to download from npm