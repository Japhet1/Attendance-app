const express = require('express')
const {getRegister, postRegister, deleteRegister, updateRegister} = require('../controllers/registerController')
const router = express.Router()

router.get('/', getRegister)

router.post('/', postRegister)

router.delete('/:id', deleteRegister)

router.put('/:id', updateRegister)


module.exports = router