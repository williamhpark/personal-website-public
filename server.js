const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

/* APP CONFIG */

const app = express();
const PORT = process.env.PORT || 5000;

/* MIDDLEWARE */

app.use(express.json());
app.use(cors());

/* DB CONFIG */

console.log("Connecting to MongoDB.");

const connection = require("./mongoConnection");

// Initialize GFS
let gfs;

connection.once("open", () => {
  // Initialize stream
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads", // Same as collection name
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

/* ROUTES CONFIG*/

// Blog routes
app.use("/api/blog", require("./routes/postRoutes"));

// GridFS routes

// @route GET /
// @desc  Loads form
app.get("/allFiles", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      res.json({ files: false });
    } else {
      files.map((file) => {
        if (
          file.contentType === "image/jpeg" ||
          file.contentType === "image/png"
        ) {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
      });
      res.json({ files: files });
    }
  });
});

// @route   POST /upload
// @desc    Uploads file to DB
app.post("/upload", upload.single("file"), (req, res) => {
  // res.json({ file: req.file });
});

// @route GET /files
// @desc  Display all files in JSON
app.get("/files", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }
    // Files exist
    return res.json(files);
  });
});

// @route GET /files/:filename
// @desc  Display single file object
app.get("/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    // File exists
    return res.json(file);
  });
});

// @route GET /image/:filename
// @desc  Display image
app.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

// @route DELETE /files/:id
// @desc  Delete file
app.delete("/files/:id", (req, res) => {
  gfs.remove({ _id: req.params.id, root: "uploads" }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
  });
});

/* LISTENER */

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

/* SERVE STATIC ASSETS IN PRODUCTION*/

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
