const express = require('express')
const { getProducts, getProduct, removeProduct, addProduct, updateProduct } = require('./product.controller')
const router = express.Router()



router.get('/', getProducts)
router.get('/:id', getProduct)

router.post('/', addProduct)
router.put('/:id', updateProduct)
router.get('/:id', removeProduct)

