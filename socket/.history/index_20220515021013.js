import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5000",
  },
});

io.on("connection", (socket) => {
  console.log("socket");
});

io.listen(3000);
