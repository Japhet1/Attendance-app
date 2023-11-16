const express = require('express')
const {getRegister, postRegister, deleteRegister, updateRegister} = require('../controllers/registerController')
const routes = express.Router()

routes.get('/', getRegister)

routes.post('/', postRegister)

routes.delete('/:id', deleteRegister)

routes.put('/:id', updateRegister)


module.exports = routes