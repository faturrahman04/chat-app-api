const authService = require("../services/auth.service")

async function register(req, res) {
    try {
        const user = await authService.register(req.body)
        
        res.status(200).json({
            code: 200,
            message: "User registered",
            results: req.body
        })
    } catch (err) {
        return res.status(400).json({
            code: 400,
            message: err.message
        })
    }
}

async function login(req, res) {
    try {
        const user = await authService.login(req.body)
        console.log(user)
        return user
    } catch (err) {
        res.status(400).json({
            code: 400,
            message: err.message
        })
    }
}

module.exports = {
    register,
    login
}