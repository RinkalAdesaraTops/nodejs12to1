const catModel= require('../models/catModel')
const add = async(req,res)=>{
    let data = await catModel.insertOne(req.body)
    if(data){
        return res.json({
            "msg":"Category save successfully..."
        })
    }
}
const del = async(req,res)=>{
    let id = req.params.id
    let data = await catModel.findByIdAndDelete(id)
    if(data){
        return res.json({
            "msg":"Category deleted successfully.."
        })
    }
}
const disp = async(req,res)=>{
    let data = await catModel.find()
    if(data){
        return res.json({
            "msg":"Category get successfully.",
            "data":data
        })
    }
}   
module.exports = {add,del,disp}