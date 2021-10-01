process.on("uncaughtException", function (err) {
  console.error(`uncaughtException: ${err}`);
});

import dotenv from "dotenv";

// * Local Environment
if (process.env.NODE_ENV == "local") {
  dotenv.config({ debug: true });
}

import "module-alias/register";
import createError from "http-errors";
import express, { Request, Response } from "express";
import path from "path";
import cors from "cors";
import http from "http";
import _ from "lodash";
import app from "@src/app";
import ServerConfig from "./config/server.config";
import { initLogger } from "@src/helper/logger.helper";

// initialise db connection
// Database.init();
const logger = initLogger("server-start");

const serverPort = 16900;

// Initialize websocket
// SocketRouter.init(serverPort);

app.listen(serverPort, function () {
  logger.info(`Listening on port: ${serverPort}`);
  logger.info(`Environment: ${ServerConfig.nodeEnvironment()}`);
});
