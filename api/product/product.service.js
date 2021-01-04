const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query(filterBy = {}) {
    const critiria = _buildCritiria(filterBy)
    const collection = await dbService.getCollection('product')
    try {
        const products = collection.find(critiria).toArray()
        return products
    } catch (err) {
        console.log('ERROR: cannot find products');
        throw err
    }
}

async function getById(productId) {
    const colleection = await dbService.getCollection('product')
    try {
        const product = await colleection.findOne({ '_id': ObjectId(productId) })
        return product
    } catch (err) {
        console.log('EROOR: cannot find product');
        throw err
    }
}

async function remove(productId) {
    const collection = dbService.getCollection('product')
    try {
        await collection.deleteOne({ '_id': ObjectId(productId) })
    } catch (err) {
        throw err
    }
}

async function add(product) {
    const collection = dbService.getCollection('product')
    try {
        await collection.insertOne(product)
        return product
    } catch (err) {
        console.log('EROOR: cnoot insert product');
        throw err
    }
}

async function update(product) {
    const collection = dbService.getCollection('product')
    product._id = ObjectId(product._id)
    try {
        await collection.updateOne({ _id: product._id }, { $set: mix })
        return product
    } catch (err) {
        console.log('ERROR: cannot update product');
        throw err
    }
}

function _buildCritiria(filterBy) {
    const criteria = {}
    if (filterBy.title) criteria.title = filterBy.title
    return criteria
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}