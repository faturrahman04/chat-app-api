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
        lowercase: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },

    thinkey: {
        type: BigInt,
        // required: true,
        index: true,
        unique: true,
        sparse: true
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

module.exports = mongoose.model('User', UserSchema)