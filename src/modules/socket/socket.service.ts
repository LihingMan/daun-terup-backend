const players: { id: string; roomId: string; socketId: string }[] = [];

// user joins game
export function newPlayer(id: string, roomId: string, socketId: string) {
  const player = { id, socketId, roomId };
  players.push(player);
  return player;
}

// Get current player
export function getActiveUser(id: string) {
  return players.find((player) => player.id === id);
}
