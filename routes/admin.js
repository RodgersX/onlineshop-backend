//in-built modules
const path = require('path')

//third-party modules
const express = require('express')

//my controllers
const productController = require('../controllers/products')

const router = express.Router()

router.get('/add-product', productController.productPage)

router.post('/add-product', productController.addProduct)

module.exports = router
