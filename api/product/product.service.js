const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
  
 
async function query(filterBy = {}) {
    // TODO: Build the criteria with $regex
     const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('products')

    try {
         const products = await collection.find().toArray();
       // var products = await collection.aggregate([
       //     {
       //         $match: filterBy
       //     }
       // ]).toArray()
        ////console.log('products',products)
        return products
    } catch (err) {
        //console.log('ERROR: cannot find products')
        throw err;
    }
}


async function getById(productId) {
    const collection = await dbService.getCollection('products')
    try {
        const product = await collection.findOne({ '_id': ObjectId(productId) })
        //delete product.password

       // product.givenReviews = await reviewService.query({ byUserId: ObjectId(product._id) })
       // product.givenReviews = product.givenReviews.map(review => {
       //     delete review.byUser
       //     return review
       // })

    //    //console.log('finding product' ,product)
        return product
    } catch (err) {
        //console.log(`ERROR: while finding product ${productId}`)
        throw err;
    }
}
 
async function remove(productId) {
    const collection = await dbService.getCollection('products')
    try {
        //bjectId(productId)
        await collection.deleteOne({ "_id": ObjectId(productId) })
    } catch (err) {
        //console.log(`ERROR: cannot remove product ${productId}`)
        throw err;
    }
}


async function add(product) {
    const collection = await dbService.getCollection('products')
    try {
        await collection.insertOne(product);
        return product;
    } catch (err) {
        //console.log(`ERROR: cannot insert product`)
        throw err;
    }
}

async function update(product) {
    //console.log('MIX BACK SERVICE : ',product);
    const collection = await dbService.getCollection('products')
    product._id = ObjectId(product._id);
    try {
        await collection.updateOne({ _id: product._id }, { $set: product })
        return product
    } catch (err) {
        //console.log(`ERROR: cannot update product ${product._id}`)
        throw err;
    }
}


function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.name) {
        criteria.name = filterBy.name
    }
    
    return criteria;
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}


