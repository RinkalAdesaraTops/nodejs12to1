const subcatModel = require('../models/subcatModel')
// import subcatModel from "../models/subcatModel.js"
const insSubcat=async(req,res)=>{
    let id = req.body.subid
    if(id!=''){
        let ans = await subcatModel.findByIdAndUpdate(id,req.body)
    } else {
        let ans = await subcatModel.insertOne(req.body)
    }
    res.redirect('/subcategory')
}
const dispSubcat=async(req,res)=>{
    let data = await subcatModel.find()
    res.render('subcategory',{
        "subcatdata":data,
         "editdata":""
    })
}
const delSubcat = async(req,res)=>{
    let id = req.params.id
    let data = await subcatModel.findByIdAndDelete(id)
    res.redirect('/subcategory')
}

const editSubcat = async(req,res)=>{
   const id = req.params.id
     let editdata = await subcatModel.findById(id)
    let data = await subcatModel.find()
    res.render('subcategory',{
        subcatdata:data,
        editdata:editdata
    })
}
module.exports = {insSubcat,dispSubcat,delSubcat,editSubcat}