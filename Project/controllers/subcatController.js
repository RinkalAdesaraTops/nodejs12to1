const subcatModel = require('../models/subcatModel')
// import subcatModel from "../models/subcatModel.js"
const insSubcat=async(req,res)=>{
    let ans = await subcatModel.insertOne(req.body)
    res.redirect('/subcategory')
}
const dispSubcat=async(req,res)=>{
    let data = await subcatModel.find()
    res.render('subcategory',{
        "subcatdata":data
    })
}
const delSubcat = async(req,res)=>{
    let id = req.params.id
    let data = await subcatModel.findByIdAndDelete(id)
    res.redirect('/subcategory')
}
module.exports = {insSubcat,dispSubcat,delSubcat}