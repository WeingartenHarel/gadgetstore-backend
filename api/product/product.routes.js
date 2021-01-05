const express = require('express')
const {requireAuth, requireAdmin,requireUser} = require('../../middlewares/requireAuth.middleware')
const {addProduct,updateProduct, getProducts, getProduct, deleteProduct} = require('./product.controller')
const router = express.Router()
 
// middleware that is specific to this router

//router.use(requireUser)
//router.use(requireAdmin)
router.get('/', getProducts) //requireUser
router.get('/:id', getProduct) //requireUser

router.post('/' , addProduct) //,requireAdmin
router.put('/:id', updateProduct) //, requireAdmin
router.delete('/:id', deleteProduct) //, requireAdmin

module.exports = router