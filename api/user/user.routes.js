const express = require('express')
const { getUsers, getUser, removeUser, addUser, updateUser } = require('../user/user.controller')
const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', removeUser)