const mongoose = require('mongoose')

async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/chat-app')
        console.log("Database connected successfully!")
    } catch(err) {
        console.log("Failed to connected to database, ", err)
    }
}

module.exports = connectDatabase;