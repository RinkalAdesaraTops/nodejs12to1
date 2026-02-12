var express = require('express')
var router = express.Router()
var {insSubcat,dispSubcat} = require('../controllers/subcatController')
router.get('/',dispSubcat)
router.post('/ins',insSubcat)

module.exports = router