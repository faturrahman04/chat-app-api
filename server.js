const app = require("./app")
const connect = require("./config/database")

// MongoDB
connect();

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})