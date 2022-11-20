// Create the connection to Mongodb 

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialmedia",
  {
    //'mongodb://localhost:27017/socialmedia', I changed localhost per online direction because of the error that I got "VS Code Error ECONNREFUSED 127.0.0.1:12345"

    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
