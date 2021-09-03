const { translate } = require("bing-translate-api");
// const reservedPath = ["/", "/objek"];
const port = process.env.PORT || 8080;
const path = require("path");

// express server on port 4000
const express = require("express");
const app = express();

app.get(["/", "/objek"], function (req, res, next) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use(express.static("."));

app.post("/translate", async (req, res) => {
  await translate(JSON.parse(req.body).originalText, "en", "id", true).then(
    result => {
      res.writeHead(200);
      res.end(JSON.stringify(result));
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
