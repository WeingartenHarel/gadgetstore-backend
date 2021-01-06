const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
  
 
async function query(filterBy = {}) {
    // TODO: Build the criteria with $regex
     const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('store')

    try {
         const stores = await collection.find().toArray();
       // var products = await collection.aggregate([
       //     {
       //         $match: filterBy
       //     }
       // ]).toArray()
        ////console.log('products',products)
        return stores
    } catch (err) {
        //console.log('ERROR: cannot find products')
        throw err;
    }
}


async function getById(storeId) {
    const collection = await dbService.getCollection('store')
    try {
        const store = await collection.findOne({ '_id': ObjectId(storeId) })
        //delete product.password

       // product.givenReviews = await reviewService.query({ byUserId: ObjectId(product._id) })
       // product.givenReviews = product.givenReviews.map(review => {
       //     delete review.byUser
       //     return review
       // })

    //    //console.log('finding product' ,product)
        return store
    } catch (err) {
        //console.log(`ERROR: while finding product ${productId}`)
        throw err;
    }
}
 
async function remove(storeId) {
    const collection = await dbService.getCollection('store')
    try {
        //bjectId(productId)
        await collection.deleteOne({ '_id': ObjectId(storeId) })
    } catch (err) {
        //console.log(`ERROR: cannot remove product ${productId}`)
        throw err;
    }
}


async function add(store) {
    const collection = await dbService.getCollection('store')
    try {
        await collection.insertOne(store);
        return store;
    } catch (err) {
        //console.log(`ERROR: cannot insert product`)
        throw err;
    }
}

async function update(store) {
    //console.log('MIX BACK SERVICE : ',product);
    const collection = await dbService.getCollection('store')
    store._id = ObjectId(store._id);
    try {
        await collection.updateOne({ _id: store._id }, { $set: store })
        return store
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


