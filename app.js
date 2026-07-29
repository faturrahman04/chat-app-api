// Dependencies
const express = require("express")
const cors = require("cors")

// Resource
const corsOptions = require("./config/cors")

// Entry
const app = express()

// Routes
const auth = require("./routes/auth.routes")

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.use('/api/auth', auth)

module.exports = app;