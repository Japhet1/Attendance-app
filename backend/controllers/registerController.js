const Register = require('../models.js/registerModel')
const mongoose = require('mongoose')



const getRegister = async (req, res) => {
    const register = await Register.find({}).sort({createdAt: 1})
    res.status(200).json(register)
}

const postRegister = async (req, res) => {
    const {firstname, lastname, contact, status } = req.body

    const emptyFields = []

    if (!firstname) {
        emptyFields.push('firstname')
    }
    if (!lastname) {
        emptyFields.push('lastname')
    }
    if (!contact) {
        emptyFields.push('contact')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
    }

    try {
        const register = await Register.create({firstname, lastname, contact, status})
        res.status(200).json(register)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

const deleteRegister = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'no such attendee'})
    }
    const register = await Register.findOneAndDelete({_id: id})
    if (!register) {
        return res.status(400).json({error: 'no such attendee'})
    }
    res.status(200).json(register)
}

const updateRegister = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no attendee'})
    }

    const register = await Register.updateOne({ _id: id}, {
        ...req.body
    })

    if (!register) {
        return res.status(404).json({ error: 'no such attendee'})
    }

    res.status(200).json(register)

}



module.exports = {getRegister,  postRegister, deleteRegister, updateRegister}