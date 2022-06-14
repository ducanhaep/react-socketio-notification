import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  io.emit("firstEvent", "Hello this is test");
  socket.on("disconnect", () => {
    console.log("some one has left");
  });
});

io.listen(5000);
