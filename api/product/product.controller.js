const productService = require('./product.service')

async function getProducts(req, res) {
    try {
        const products = await productService.query(req.query)
        res.send(products)
    } catch (err) {
        res.status(500).send({ error: 'cannot get products!' })
    }
}

async function getProduct(req, res) {
    try {
        const product = await productService.getById(req.params.id)
        res.send(product)
    } catch (err) {
        res.status(500).send({ error: 'cannot get product!' })
    }
}

async function removeProduct(req, res) {
    try {
        await productService.remove(req.params.id)
        res.end()
    } catch (err) {
        res.status(500).send({ error: 'cannot remove product!' })
    }
}

async function addProduct(req, res) {
    try {
        let product = req.body
        product = await productService.add(product)
    } catch (err) {
        console.log('cannot add product', err);
    }
    res.send(product)
}

async function updateProduct(req, res) {
    try {
        let product = req.body
        await productService.update(product)
        res.send(product)
    } catch (err) {
        res.status(500).send({ error: 'cannot update product!' })
    }
}

module.exports = {
    getProducts,
    getProduct,
    removeProduct,
    addProduct,
    updateProduct
}