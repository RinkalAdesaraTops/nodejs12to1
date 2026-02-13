var express = require('express')
var router = express.Router()
var {insSubcat,dispSubcat,delSubcat} = require('../controllers/subcatController')
router.get('/',dispSubcat)
router.post('/ins',insSubcat)
router.get('/del/:id',delSubcat)

module.exports = router