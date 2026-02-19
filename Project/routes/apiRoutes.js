var express = require('express')
var router = express.Router()
const {add,del,disp} = require('../controllers/Apicontroller')
router.post("/cat/add",add)
router.get("/cat/disp",disp)
router.delete("/cat/del/:id",del)
module.exports = router