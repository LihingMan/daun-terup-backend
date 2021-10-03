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
import cors from "cors";
import http from "http";
import _ from "lodash";
import cookieParser from "cookie-parser";

const app = express();
// Enable CORS
app.use(cors());

// Initiate socket io server.
const server = http.createServer(app);

// Request Body
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// Cookie
app.use(cookieParser());

// -- add routes here

// -- routes end

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
