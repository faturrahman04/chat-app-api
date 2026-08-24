const bcrypt = require('bcrypt')
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

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);

    data.password = hash

    return await userRepository.createUser(data)
}

async function login(data) {
    // const username = await userRepository.findByUsername(data.username)
    const user = await userRepository.findByEmail(data.email) // Mencari berdasarkan email
    const password = await data.password // Password dari client request

    if (!user) {
        throw new Error("Email atau password tidak valid");
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw new Error("Email atau password salah")
    }

    return user
}

module.exports = {
    register,
    login
}