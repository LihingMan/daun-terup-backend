import { initLogger } from "@src/helper/logger.helper";
import ServerConfig from "@src/config/server.config";
import { Router, Request, Response } from "express";
import { wrapHandler } from "@src/helper/route.helper";

const CreateGameRouter = Router();
const logger = initLogger("create-game-route");

CreateGameRouter.post(
  "/create-game",
  wrapHandler(async (req: Request, res: Response) => {
    logger.info("Creating game");
  })
);
