const mongoose = require("mongoose");
module.exports = {
    database: 'mongodb://localhost:27017/meanauth',
    secret: '$3cret!$#@'
}
const {
    MONGO_USERNAME = 'admin',
    MONGO_PASSWORD = 'secret',
    MONGO_HOST = 'localhost',
    MONGO_PORT = 27017,
    MONGO_DATABASE = 'auth'
} = process.env
 module.exports.MONGO_URI = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)
}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`

 module.exports.MONGO_OPTIONS =  mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
 