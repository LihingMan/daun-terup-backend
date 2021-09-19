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

// initialise db connection
// Database.init();

const serverPort = 16900;

// Initialize websocket
// SocketRouter.init(serverPort);

app.listen(serverPort, function () {
  console.log(`Listening on port: ${serverPort}`);
  console.log(`Environment: ${ServerConfig.nodeEnvironment()}`);
});
