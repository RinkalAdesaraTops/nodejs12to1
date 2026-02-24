var express = require('express')
var router = express.Router()
const {add,del,disp} = require('../controllers/Apicontroller')
const privateKey = "abc@123"
var jwt = require('jsonwebtoken')
const verifyToken = (req,res,next)=>{
    let data = req.headers.authorization
    console.log(data);
    
    if(data!=undefined){
        let token = data.split(' ')[1];
    
    jwt.verify(token,privateKey,(err,data)=>{
        if (err) {
            return res.json({
                "msg":err
            })
        }
        next()
    })
    } else {
        return res.json({
            "msg":"Please enter token"
        })
    }
    
}
router.post("/cat/add",add)
router.get("/cat/disp",verifyToken,disp)
router.delete("/cat/del/:id",del)
module.exports = router