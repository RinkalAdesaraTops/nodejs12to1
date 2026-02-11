var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.send("Express example 1223")
})
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/first.html")
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+"/about.html")
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/contact.html")
})
app.listen(4000,()=>{
    console.log('4000 port running...');  
})