const express = require('express')
// const {requireAuth, requireAdmin,requireUser} = require('../../middlewares/requireAuth.middleware')
const {addStore,updateStore, getStores, getStore, deleteStore} = require('./store.controller')
const router = express.Router()
 
// middleware that is specific to this router

//router.use(requireUser)
//router.use(requireAdmin)
router.get('/', getStores) //requireUser
router.get('/:id', getStore) //requireUser

router.post('/' , addStore) //,requireAdmin
router.put('/:id', updateStore) //, requireAdmin
router.delete('/:id', deleteStore) //, requireAdmin

module.exports = router