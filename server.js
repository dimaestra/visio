require("dotenv").config();
const { translate } = require("bing-translate-api");
const vision = require("@google-cloud/vision");
const multer = require("multer");
// const reservedPath = ["/", "/objek"];
const port = process.env.PORT || 8080;
const path = require("path");

// express server on port 4000
const express = require("express");
const fs = require("fs");
const { promisify } = require("util");

const unlinkAsync = promisify(fs.unlink);

const upload = multer({
  dest: "uploads/",
  filename: function (req, file, cb) {
    //req.body is empty...
    //How could I get the new_file_name property sent from client here?
    cb(null, file.originalname + "-" + Date.now() + ".png");
  }
});
const app = express();
app.use(express.json());

const client = new vision.ImageAnnotatorClient();

app.post("/upload", upload.single("image"), async (req, res) => {
  const fileName = req.file.filename;
  const folder = "uploads";

  const filePath = path.join(__dirname, folder, fileName);
  // Performs text detection on the local file
  const [result] = await client.textDetection(filePath);
  unlinkAsync(filePath);
  const detections = result.textAnnotations;
  // detections.forEach(text => console.log(text));
  res.status(200).send(detections);
});

app.get(["/", "/objek"], function (req, res, next) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use(express.static("."));

app.post("/translate", async (req, res) => {
  try {
    await translate(req.body.originalText, "en", "id", true).then(result => {
      res.status(200).send(result);
    });
  } catch (err) {
    console.log({ err });
    res.status(500).send(err);
  }
});

app.post("/ocr", async (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));