const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(process.env.APP_PORT, () => {
  console.log(
    `Application listen on ${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});
