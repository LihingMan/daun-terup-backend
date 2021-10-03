process.on("uncaughtException", function (err) {
  console.error(`uncaughtException: ${err}`);
});

import "module-alias/register";
import _ from "lodash";
import app from "@src/app";
import ServerConfig from "./config/server.config";
import { initLogger } from "@src/helper/logger.helper";
import Database from "@src/database";

const logger = initLogger("server-start");

// initialise db connection
Database.init();

const serverPort = 16900;

// Initialize websocket
// SocketRouter.init(serverPort);

app.listen(serverPort, function () {
  logger.info(`Listening on port: ${serverPort}`);
  logger.info(`Environment: ${ServerConfig.nodeEnvironment()}`);
});
