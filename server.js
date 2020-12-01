const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "./.env") });

// Setting up Express

const app = express();
app.use(cors());
app.use(express.json());

// Setting up routes

app.use("/blog", require("./routes/postRoutes"));

// Setting up Mongoose

console.log("Connecting to MongoDB.");

mongoose.connect(
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

// Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
console.log("Starting server.");
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
