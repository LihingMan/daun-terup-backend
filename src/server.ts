process.on("uncaughtException", function (err) {
  console.error(`uncaughtException: ${err}`);
});

import "module-alias/register";
import _ from "lodash";
import app from "@src/app";
import ServerConfig from "./config/server.config";
import { initLogger } from "@src/helper/logger.helper";
import SocketRouter from "@src/modules/socket/socket.route";
import { Server, Socket } from "socket.io";

const logger = initLogger("server-start");

const port = 16900;

const server = app.listen(port, function () {
  logger.info(`Listening on port: ${port}`);
  logger.info(`Environment: ${ServerConfig.nodeEnvironment()}`);
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Initialize websocket
SocketRouter.init(io);
