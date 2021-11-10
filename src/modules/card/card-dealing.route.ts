import { initLogger } from "@src/helper/logger.helper";
import ServerConfig from "@src/config/server.config";
import { Router, Request, Response } from "express";
import { wrapHandler } from "@src/helper/route.helper";
import { PrismaClient, Prisma } from "@prisma/client";
import { nanoid } from "nanoid";
import { check } from "express-validator";
import momentMYT from "@src/utils/moment-msia-tz";
import { random } from "lodash";

const CardDealingRouter = Router();
const logger = initLogger("card-dealing-route");

const prisma = new PrismaClient();

CardDealingRouter.get(
  "/",
  wrapHandler(async (req: Request, res: Response) => {
    logger.info("dealing card");

    const deck = await prisma.deck.findUnique({
      where: {
        deckName: "Standard 52-card deck",
      },
    });

    const cards = await prisma.card.findMany();

    var deal_card = null;
    deal_card = cards[random(0, 51)];

    return res.status(200).json({
      suitId: deal_card.suitId,
      rankId: deal_card.rankId,
    });
  })
);

export default CardDealingRouter;
