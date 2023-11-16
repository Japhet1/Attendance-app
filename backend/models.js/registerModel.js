const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registerSchema = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    status: {
        type: String
    }
  
}, {timestamps: true})


module.exports = mongoose.model ('Register', registerSchema)
