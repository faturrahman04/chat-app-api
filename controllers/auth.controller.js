const authService = require("../services/auth.service")

async function register(req, res) {
    try {
        const user = await authService.register(req.body)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = register