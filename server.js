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

const users = {};

io.on("connection", (socket) => {
  // console.log("User connected");

  users[socket.id] = socket.id;

  // socket.on("message", (message) => {
  //   // console.log("Received message:", message);
  //   io.emit("message", message);
  // });

  // socket.on("new-user", (username) => {
  //   users[socket.id] = username;
  //   socket.broadcast.emit("user-connected", username);
  // });

  socket.on("send-message", (message) => {
    io.emit("receive-message", {
      message: message,
      username: users[socket.id],
    });
  });


  socket.on("checkbox", (isChecked) => {
    io.emit("checkbox", isChecked);
    console.log(isChecked);
  });

  socket.on("typing", (isTyping) => {
    socket.broadcast.emit("typing", isTyping);
  });

  socket.broadcast.emit("user-connected", socket.id);


  socket.on("disconnect", () => {
    // console.log("User disconnected");
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    // console.log(`user disconnected with id ${users[socket.id]}`);
    delete users[socket.id];
  });
});


http.listen(4001, () => {
  console.log("Server started on port 4001");
});
