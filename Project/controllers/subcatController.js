const subcatModel = require('../models/subcatModel')
// import subcatModel from "../models/subcatModel.js"
const insSubcat=async(req,res)=>{
    let ans = await subcatModel.insertOne(req.body)
    res.redirect('/subcategory')
}
const dispSubcat=(req,res)=>{
    res.render('subcategory')
}
module.exports = {insSubcat,dispSubcat}