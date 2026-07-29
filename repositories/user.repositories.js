const User = require("../models/User")

async function createUser(data) {
    return await User.create(data)
}

async function findByUsername(username) {
    return await User.findOne({
        username
    });
}

async function findByEmail(email) {
    return await User.findOne({
        email
    })
}

module.exports = {
    createUser,
    findByUsername,
    findByEmail
};