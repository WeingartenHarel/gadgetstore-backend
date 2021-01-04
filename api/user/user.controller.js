const userService = require('./user.service')

async function getUsers(req, res) {
    const users = await userService.query(req.query)
    res.send(users)
}
async function getUser(req, res) {

    const user = await userService.getById(req.params.id)
    res.send(user)
}
async function removeUser(req, res) {
    await userService.remove(req.params.id)
    res.end()
}
async function addUser(req, res) {
    let user = req.body
    user = await userService.add(user)
    res.send(user)
}
async function updateUser(req, res) {
    let user = req.body
    await userService.update(user)
    res.send(user)
}

module.exports = {
    getUsers,
    getUser,
    removeUser,
    addUser,
    updateUser
}