var express = require('express')
var app = express()
var catRoutes = require('./routes/catRoutes')
var subcatRoutes = require('./routes/subcatRoutes')
var apiRoutes = require('./routes/apiRoutes')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.get('/',(req,res)=>{
    res.render('index')
})
app.use('/category',catRoutes)
app.use('/subcategory',subcatRoutes)
app.use('/api',apiRoutes)
// app.get('/category',(req,res)=>{
//     res.render('category')
// })

app.listen(5000,()=>{
    console.log('running on 5000 port');
})