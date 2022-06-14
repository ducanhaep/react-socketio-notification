import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5000",
  },
});

io.on("connection", (socket) => {
  console.log("some one has connected");
  socket.on("disconnect", () => {
    console.log("some one has left");
  });
});

io.listen(3000);
