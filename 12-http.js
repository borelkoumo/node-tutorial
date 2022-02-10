const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("ici1");
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    console.log("ici2");
    res.end("welcome to our home page");
  } else {
    console.log("ici3");
    res.end(
      '<h1>Oops!</h1><p>we cant se the page you are looking for</p><a href="/">Home</a>'
    );
  }
});

server.listen(5000);
