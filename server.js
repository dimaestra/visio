const fs = require("fs");
const http = require("http");
const staticFolder = "/";

http
  .createServer(function (req, res) {
    const reservedPath = ['/', "/kamera", "/objek"]
    if (reservedPath.includes(req.url)) {
      req.url = "index.html";
    }
    fs.readFile(__dirname + staticFolder + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080);
