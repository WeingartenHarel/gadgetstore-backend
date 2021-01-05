const logger = require('../../services/logger.service')
const Productervice = require('./product.service')
 
// TODO: needs error handling! try, catch
 
async function getProducts(req, res) {
    try {
        //console.log()
        const products = await Productervice.query(req.query)
        ////console.log('products',products)
        res.send(products)
    } catch (err) {
        logger.error('Cannot get products', err);
        res.status(500).send({ error: 'cannot get products' })

    }
}

async function getProduct(req, res) {
    ////console.log('Product controller',req.params.id)
    const Product = await Productervice.getById(req.params.id)
    ////console.log('Product controller',Product)
    res.send(Product)
}

async function deleteProduct(req, res) {
    //console.log('Product controller delete',req.params.id)
    try {
        await Productervice.remove(req.params.id)
        res.end()
    } catch (err) {
        logger.error('Cannot delete Product', err);
        res.status(500).send({ error: 'cannot delete Product' })
    }
}

async function addProduct(req, res) {
    try {
        var Product = req.body;
        Product = await Productervice.add(Product)
    } catch (err) {
        logger.error('Cannot add Product', err);

    }
   
    //Product.byUser = req.session.Product;
    // TODO - need to find aboutUser
    //Product.aboutUser = {}
    res.send(Product)
}

async function updateProduct(req, res) {
    try{
        const Product = req.body;
        //console.log('controlller updateProduct',Product)
        
        await Productervice.update(Product)
        res.send(Product)
    }catch(err){
        //console.log(' CUS AMAK ERORR IN UPDATEING BLYAT !!!!!!!!!!!!! :',err);
    }
}

module.exports = {
    getProducts,
    getProduct,
    deleteProduct,
    addProduct,
    updateProduct
}