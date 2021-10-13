import { Server, Socket } from "socket.io";
import app from "@src/app";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { checkRoomId } from "./socket.utils";
import { newPlayer } from "./socket.service";
import { initLogger } from "@src/helper/logger.helper";

const logger = initLogger("server-start");

namespace SocketRouter {
  export function init(
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>
  ) {
    logger.info("Initialized websocket");

    io.of("/games").on("connection", function (socket: Socket) {
      socket.on("joinGame", function ({ playerId, roomId }) {
        const player = newPlayer(playerId, roomId, socket.id);
        socket.join(player.roomId);
      });
    });
  }
}

export default SocketRouter;
