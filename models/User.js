const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: false
    },

    username: {
        type: String,
        required: true,
        lowercase: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    thinkey: {
        type: BigInt,
        required: true,
        index: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'writed_at'
    }
})

module.exports = mongoose.Model('User', UserSchema)