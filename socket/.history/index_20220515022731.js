import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});
let onlineUsers = [];
const addNewUser = (username, socketId) => {
  !onlineUser.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  onlineUser = onlineUser.find((user) => user.user === username);
};

io.on("connection", (socket) => {
  io.to().emit("firstEvent", "Hello this is test");
  socket.on("disconnect", () => {
    console.log("some one has left");
  });
});

io.listen(5000);
