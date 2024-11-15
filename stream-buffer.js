const httpModule = require("http");
const fs = require("fs");

// creating a server with raw nodejs
const server = httpModule.createServer();

// listener
server.on("request", (req, res) => {
  // console.log(req.url, req.method);
  if (req.url === "/read-file" && req.method === "GET") {
    //   streaming file reading
    const readAbleStream = fs.createReadStream("./texts/read.txt");

    readAbleStream.on("data", (buffer) => {
      res.write(buffer);
    });

    readAbleStream.on("end", () => {
      res.end("Hello from world !");
    });
  }
});

server.listen(5000, () => {
  console.log(`server running on port: 5000`);
});
