const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/nodejs12to1")
    .then(()=>console.log("Connected to db"))

const schema = mongoose.Schema
let subcatSchema = new schema({
    catid: { 
        type: schema.Types.ObjectId, 
        ref: 'category' 
    },
    subcatname:String,
    image:String
})
const subcatModel = mongoose.model("subcategory",subcatSchema)
module.exports = subcatModel