const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const cors = require("cors");

app.use(cors());

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", (message) => {
    console.log("Received message:", message);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(4000, () => {
  console.log("Server started on port 4000");
});
