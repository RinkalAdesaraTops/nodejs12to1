var express = require('express')
var app = express()
var catRoutes = require('./routes/catRoutes')
var subcatRoutes = require('./routes/subcatRoutes')
var apiRoutes = require('./routes/apiRoutes')
var jwt = require('jsonwebtoken')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.get('/',(req,res)=>{
    res.render('index')
})
const privateKey = "abc@123" 
const generateToken = (req,res)=>{
    let user = {
        name:"abc",
        email:"abcd@mail.com"
    }
    jwt.sign(user,privateKey,function(err,token){
        return res.json({
            "msg":"Token generated successfully.",
            "token":token
        })
    })
}
app.get('/generateToken',generateToken)
app.use('/category',catRoutes)
app.use('/subcategory',subcatRoutes)
app.use('/api',apiRoutes)
// app.get('/category',(req,res)=>{
//     res.render('category')
// })

// authorization
//authentication
app.listen(5000,()=>{
    console.log('running on 5000 port');
})