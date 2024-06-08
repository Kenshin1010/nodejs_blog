const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/f8_education_dev";

const options = {
  serverSelectionTimeoutMS: 5000,
};

async function connect() {
  try {
    await mongoose.connect(uri, options);
    console.log("Connect successfully!");
  } catch (error) {
    console.log("Connect failure!");
  }
}

module.exports = { connect };
