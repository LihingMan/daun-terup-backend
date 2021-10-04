-- CreateTable
CREATE TABLE "Suit" (
    "id" INTEGER NOT NULL,
    "suit" TEXT NOT NULL,

    CONSTRAINT "Suit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" INTEGER NOT NULL,
    "rank" TEXT NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "suitId" INTEGER NOT NULL,
    "rankId" INTEGER NOT NULL,
    "cardName" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardDeck" (
    "id" SERIAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "deckId" INTEGER NOT NULL,

    CONSTRAINT "CardDeck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deck" (
    "id" SERIAL NOT NULL,
    "deckName" TEXT NOT NULL,

    CONSTRAINT "Deck_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Suit_suit_key" ON "Suit"("suit");

-- CreateIndex
CREATE UNIQUE INDEX "Rank_rank_key" ON "Rank"("rank");

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardName_key" ON "Card"("cardName");

-- CreateIndex
CREATE UNIQUE INDEX "Deck_deckName_key" ON "Deck"("deckName");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_suitId_fkey" FOREIGN KEY ("suitId") REFERENCES "Suit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardDeck" ADD CONSTRAINT "CardDeck_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardDeck" ADD CONSTRAINT "CardDeck_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
