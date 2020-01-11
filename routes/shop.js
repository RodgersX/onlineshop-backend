//in-built modules
const path = require('path')

//third-party modules
const express = require('express')

//file exports
const productController = require('../controllers/products')

const router = express.Router()

router.get('/', productController.viewProducts)

module.exports = router