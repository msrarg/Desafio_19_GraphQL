// const connect = require('mongodb').connect;
require("dotenv").config();
const mongoose = require("mongoose");

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (e) {
    throw new Error(`Error en DB ${e.message}`);
  }
};

module.exports = mongoConnection;
