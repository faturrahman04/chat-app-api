// Dependencies
const express = require("express")
const cors = require("cors")

// Resource
const corsOptions = require("./config/cors")

// Entry
const app = express()

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello")
})

module.exports = app;