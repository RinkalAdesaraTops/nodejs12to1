let catModel = require('../models/catModel')
const add = async(req,res)=>{
    let result = await catModel.insertOne(req.body)
    res.redirect('/category')
    // console.log(req.body);
    
}
const disp = async(req,res)=>{
    let result = await catModel.find() 
    res.render('category',{
        "catdata":result
    })
}
const del = async(req,res)=>{
    let id = req.params.id
    let result = await catModel.findByIdAndDelete(id)
    if(result){
         res.redirect('/category')
    }
}
module.exports = {add,disp,del}