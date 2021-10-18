import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { newPlayer } from "./socket.service";
import { initLogger } from "@src/helper/logger.helper";

const logger = initLogger("server-start");

namespace SocketRouter {
  export function init(
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>
  ) {
    logger.info("Initialized websocket");

    io.of("/game").on("connection", function (socket: Socket) {
      socket.on("joinGame", function ({ playerId, roomId }) {
        const player = newPlayer(playerId, roomId, socket.id);
        logger.info(
          `Player ${player.id} Room ${player.roomId} Socket ${player.socketId}`
        );
        // i think that sending a message to socketId will be a personal message. all clients should have a unique socketId
        socket.join(player.roomId);
      });
    });
  }
}

export default SocketRouter;
