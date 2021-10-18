import { initLogger } from "@src/helper/logger.helper";
import ServerConfig from "@src/config/server.config";
import { Router, Request, Response } from "express";
import { wrapHandler } from "@src/helper/route.helper";
import { PrismaClient, Prisma } from "@prisma/client";
import { nanoid } from "nanoid";
import { check } from "express-validator";
import momentMYT from "@src/utils/moment-msia-tz";

const CreateGameRouter = Router();
const logger = initLogger("create-game-route");

const prisma = new PrismaClient();

CreateGameRouter.post(
  "/",
  [check("game").isString(), check("nickname").isString()],
  wrapHandler(async (req: Request, res: Response) => {
    logger.info("Creating game");

    const gameName = req.body.game;
    const nickname = req.body.nickname;

    const roomId = nanoid();

    const game = await prisma.game.findUnique({
      where: {
        gameName: gameName,
      },
    });

    const deck = await prisma.deck.findUnique({
      where: {
        deckName: "Standard 52-card deck",
      },
    });

    const match = await prisma.match.create({
      data: {
        gameId: game.id,
        deckId: deck.id,
        roomId: roomId,
        startTime: momentMYT().toDate(),
        numOfPlayers: game.maxPlayers,
      },
    });

    const user = await prisma.player.create({
      data: {
        nickName: nickname,
        participant: {
          create: {
            matchId: match.id,
            score: 0,
            playerOrder: 0,
          },
        },
      },
    });

    return res.status(200).json({
      roomId: roomId,
    });
  })
);

export default CreateGameRouter;
