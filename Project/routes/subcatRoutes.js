var express = require('express')
var router = express.Router()
var {insSubcat,dispSubcat,delSubcat,editSubcat} = require('../controllers/subcatController')
router.get('/',dispSubcat)
router.post('/ins',insSubcat)
router.get('/del/:id',delSubcat)
router.get('/edit/:id',editSubcat)

module.exports = router