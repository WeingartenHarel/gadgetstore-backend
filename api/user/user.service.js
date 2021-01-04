const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


async function query(filterBy = {}){
    const critiria = _buildCritiria(filterBy)
    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find(critiria).toArray()
        users.forEach(user => delete user.password)
        return users
    } catch(err){
        console.log('ERROR: cannot find users');
        throw err
    }
}
async function getById(userId){
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({'_id':ObjectId(userId)})
        delete user.password

        return user
    } catch(err){
        console.log(`ERROR: cannot find user ${userId}`);
        throw err
    }
}
async function remove(userId){
    const collection = await dbService.getCollection('user')
    try {
        await collection.deleteOne({'id': ObjectId(userId)})
        user._id = ObjectId(user._id)
        
    } catch(err){
        console.log(`ERROR: cannot remove ${userId}`);
        throw err
    }
}
async function add(user){
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user)
        return user
    } catch(err){
        console.log('ERROR: cannot insert user');
        throw err
    }
}
async function update(user){
    const collection = await dbService.getCollection('user')
    try {
        await collection.updaueOne({_id:ObjectId(user._id)}, {$set: user})
        users.forEach(user => delete user.password)
        return user
    } catch(err){
        console.log(`ERROR: cannot update user ${user._id}` );
        throw err
    }
}

function _buildCritiria(filterBy){
    const critiria = {}


    return critiria;
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}