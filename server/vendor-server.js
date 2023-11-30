const http = require("http");

const host = 'localhost';
const port = 8000;

const products = [
  { type: "Coke", price: "5.5", currency: "NZD" },
  { type: "Pepsi", price: "5.3", currency: "NZD" },
  { type: "Fanta", price: "4.5", currency: "NZD" },
];

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/vendor":
      res.writeHead(200);
      res.end(JSON.stringify(products));
      break
    case "/vendor/coke":
      res.writeHead(200);
      res.end(JSON.stringify(products[0]));
      break
    case "/vendor/pepsi":
      res.writeHead(200);
      res.end(JSON.stringify(products[1]));
      break
    case "/vendor/fanta":
      res.writeHead(200);
      res.end(JSON.stringify(products[2]));
      break
  }
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
