const http = require("http");
const app = require("./config/express");
const PORT = process.env.PORT || 6060;

const server = http.createServer(app);

const init = () => {
  server.listen(PORT, err => {
    if (err) {
      console.log("Server crashed for the following reasons: ");
      throw err;
    }
    console.log(`Successfully connected to port ${PORT}`);
  });
};
init();

server.on("error", () => {
  server.close(setTimeout(init, 1000));
});
