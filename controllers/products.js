const Product = require('../models/product')

exports.productPage = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        activeProduct: true,
        productCSS: true,
        formsCSS: true,
        activeAddProduct: true
    })
}

exports.addProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.viewProducts = (req, res, next) => {
    const products = Product.fetchAll()
    res.render('shop', {
        prods: products, 
        pageTitle: 'The Shop', 
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    })
}