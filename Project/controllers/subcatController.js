const catModel = require('../models/catModel');
const subcatModel = require('../models/subcatModel')
const fs = require('fs')
// import subcatModel from "../models/subcatModel.js"
const insSubcat = async (req, res) => {
    let id = req.body.subid
    console.log(req.file);
    if (req.file != undefined) {
        req.body.image = req.file.filename
        if (id != '') {
            let data = await subcatModel.findById(id)
            if (data.image != '') {
                fs.unlink("public/uploads/" + data.image, (err) => {
                    if (err) console.log("error == " + err)
                    console.log('image deleted');
                })
            }
        }
    }
    if (id != '') {
        let ans = await subcatModel.findByIdAndUpdate(id, req.body)
    } else {
        let ans = await subcatModel.insertOne(req.body)
    }
    res.redirect('/subcategory')
}
const dispSubcat = async (req, res) => {
    let data = await subcatModel.find().populate("catid")
    let catdata = await catModel.find()
    res.render('subcategory', {
        "subcatdata": data,
        "editdata": "",
        "catdata":catdata
    })
}
const delSubcat = async (req, res) => {
    let id = req.params.id
    let subcatData = await subcatModel.findById(id)
    if (subcatData.image != '') {
        fs.unlink("public/uploads/" + subcatData.image, (err) => {
            if (err) console.log("error == " + err)
            console.log('image deleted');
        })
    }
    let data = await subcatModel.findByIdAndDelete(id)
    res.redirect('/subcategory')
}

const editSubcat = async (req, res) => {
    const id = req.params.id
    let editdata = await subcatModel.findById(id)
    let data = await subcatModel.find().populate("catid")
    let catdata = await catModel.find()
    res.render('subcategory', {
        subcatdata: data,
        editdata: editdata,
        catdata:catdata
    })
}
module.exports = { insSubcat, dispSubcat, delSubcat, editSubcat }