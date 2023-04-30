const net = require("net");

const HOST = "10.14.139.145";
const PORT = 8899;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log(`Connected to ${HOST}:${PORT}`);
});

client.on("data", (data) => {
  console.log(`Received data: ${data}`);
});

client.on("close", () => {
  console.log("Connection closed");
});
