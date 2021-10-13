process.on("uncaughtException", function (err) {
  console.error(`uncaughtException: ${err}`);
});

// import dotenv from "dotenv";
// // * Local Environment
// if (process.env.NODE_ENV == "local") {
//   dotenv.config({ debug: true });
// }

import "module-alias/register";
import createError from "http-errors";
import express, { Request, Response } from "express";
import cors from "cors";
import http from "http";
import _ from "lodash";
import cookieParser from "cookie-parser";
import CreateGameRouter from "@src/modules/gameroom/create-game.route";

const app = express();
// Enable CORS
app.use(cors());

// Request Body
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// Cookie
app.use(cookieParser());

// -- add routes here
app.use("/create-game", CreateGameRouter);
// -- routes end

// endpoint sanity
app.get("/health", (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };

  res.status(200).send(data);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (
  err: { status: any; message: any },
  req: any,
  res: Response,
  next: any
) {
  return res.status(err.status || 500).json({ error: err.message });
});

export default app;
