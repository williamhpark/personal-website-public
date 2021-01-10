const mongoose = require("mongoose");

const connection = mongoose.createConnection(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("MongoDB connection established.");
  }
);

module.exports = connection;
