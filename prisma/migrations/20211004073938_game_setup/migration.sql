-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "deckId" INTEGER NOT NULL,
    "gameName" TEXT NOT NULL,
    "minPlayers" INTEGER NOT NULL,
    "maxPlayers" INTEGER NOT NULL,
    "bigBlind" DECIMAL(10,2),
    "smallBlind" DECIMAL(10,2),

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_gameName_key" ON "Game"("gameName");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
