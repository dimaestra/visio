const fs = require("fs");
const http = require("http");
const staticFolder = "/";
const port = process.env.PORT || 8080;
const { translate } = require("bing-translate-api");
http
  .createServer(async function (req, res) {
    const reservedPath = ["/", "/objek"];
    if (reservedPath.includes(req.url)) {
      req.url = "index.html";
    }
    if (req.method === "POST" && req.url === "/translate") {
      try {
        let body = "";
        await req.on("data", (chunk) => {
          body += chunk.toString();
        });

        await translate(JSON.parse(body).originalText, "en", "id", true).then(
          (result) => {
            res.writeHead(200);
            res.end(JSON.stringify(result));
          }
        );
      } catch (err) {
        res.write(500);
        res.end(JSON.stringify);
      }
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
  .listen(port);
