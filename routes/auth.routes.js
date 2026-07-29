const express = require('express')
const router = express.Router()

const AuthController = require("../controllers/auth.controller")

const timeLog = (req, res, next) => {
    console.log("Auth routes access time : ", Date.now())
    next()
}

router.use(timeLog)

// Register endpoint
router.post('/register', AuthController.register)

// Login endpoint
router.post('/login', AuthController.login)

module.exports = router