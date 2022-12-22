require("dotenv").config();
const { translate } = require("bing-translate-api");
// const reservedPath = ["/", "/objek"];
const port = process.env.PORT || 8080;
const path = require("path");

// express server on port 4000
const express = require("express");
const app = express();
app.use(express.json());

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