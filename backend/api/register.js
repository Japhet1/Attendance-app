const express = require('express')
const {getRegister, postRegister, deleteRegister, updateRegister} = require('../controllers/registerController')
const registerRoutes = express.Router()

registerRoutes.get('/', getRegister)

registerRoutes.post('/', postRegister)

registerRoutes.delete('/:id', deleteRegister)

registerRoutes.put('/:id', updateRegister)


module.exports = registerRoutes