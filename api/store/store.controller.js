const logger = require('../../services/logger.service')
const storeService = require('./store.service')
 
// TODO: needs error handling! try, catch
 
async function getStores(req, res) {
    try {
        //console.log()
        const stores = await storeService.query(req.query)
        ////console.log('stores',stores)
        res.send(stores)
    } catch (err) {
        logger.error('Cannot get stores', err);
        res.status(500).send({ error: 'cannot get stores' })

    }
}

async function getStore(req, res) {
    ////console.log('Store controller',req.params.id)
    const store = await storeService.getById(req.params.id)
    ////console.log('Store controller',Store)
    res.send(store)
}

async function deleteStore(req, res) {
    //console.log('Store controller delete',req.params.id)
    try {
        await storeService.remove(req.params.id)
        res.end()
    } catch (err) {
        logger.error('Cannot delete store', err);
        res.status(500).send({ error: 'cannot delete store' })
    }
}

async function addStore(req, res) {
    try {
        var store = req.body;
        store = await storeService.add(store)
    } catch (err) {
        logger.error('Cannot add Store', err);

    }
   
    //Store.byUser = req.session.Store;
    // TODO - need to find aboutUser
    //Store.aboutUser = {}
    res.send(Store)
}

async function updateStore(req, res) {
    try{
        const store = req.body;
        //console.log('controlller updateStore',Store)
        
        await storeService.update(store)
        res.send(store)
    }catch(err){
        //console.log(' CUS AMAK ERORR IN UPDATEING BLYAT !!!!!!!!!!!!! :',err);
    }
}

module.exports = {
    getStores,
    getStore,
    deleteStore,
    addStore,
    updateStore
}