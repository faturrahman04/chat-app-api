const userRepository = require("../repositories/user.repositories")

async function register(data) {
    
    const username = await userRepository.findByUsername(data.username)
    const email = await userRepository.findByEmail(data.email)

    if (username) {
        throw new Error("Username sudah digunakan")
    }

    return await userRepository.createUser(data)
}

async function login(data) {
    const username = await userRepository.findByUsername(data.username)
}

module.exports = {
    register,
    login
}