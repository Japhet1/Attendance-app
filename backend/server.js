require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const registerRoutes = require('./routes/registerRoutes')
const cors = require('cors');


// express app
const app = express()
const server = http.createServer(app)

// Middleware
app.use(cors());

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/register', registerRoutes)


// Database connection
mongoose.connect(process.env.MONG_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    server.listen(process.env.PORT, ()=> {
        console.log('Database successfully connected and listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})



