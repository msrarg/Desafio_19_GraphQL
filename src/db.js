// const connect = require('mongodb').connect;
require('dotenv').config()
const mongoose = require("mongoose");

const mongoConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoConnection;