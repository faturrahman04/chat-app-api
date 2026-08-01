const userRepository = require("../repositories/user.repositories")

async function register(data) {
    
    const username = await userRepository.findByUsername(data.username)
    const email = await userRepository.findByEmail(data.email)

    if (username) {
        throw new Error("Username sudah digunakan")
    }

    if (email) {
        throw new Error("Email sudah terdaftar")
    }

    return await userRepository.createUser(data)
}

async function login(data) {
    // const username = await userRepository.findByUsername(data.username)
    const user = await userRepository.findByEmail(data.email)
    const password = await data.password // Password dari client request

    if (!user) {
        throw new Error("Email atau password tidak valid")
    }

    if (password != user.password) { // Comparison password db and client
        throw new Error("Email atau password salah")
    }

    return user
}

module.exports = {
    register,
    login
}