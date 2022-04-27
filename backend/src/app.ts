import "dotenv/config";
import express from "express";
import http from "http";
import { Server } from "socket.io";

import cors from "cors";
import { router } from "./routes/routes";

const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Usuario conectado no socket ${socket.id}`);
});

app.use(cors());

app.use(express.json());
app.use(router);

export { serverHttp, io }