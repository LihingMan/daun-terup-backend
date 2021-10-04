import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface ISuit {
  id: number;
  suit: string;
}

interface IRank {
  id: number;
  rank: string;
}

interface ICard {
  suitId: number;
  rankId: number;
  cardName: string;
}

interface ICardDeck {
  cardId: number;
  deckId: number;
}

interface IGame {
  gameName: string;
  deckId: number;
  minPlayers: number;
  maxPlayers: number;
  bigBlind?: number;
  smallBlind?: number;
}

async function main() {
  await cardSetup();
  await gameSetup();
}

async function cardSetup() {
  console.log("Seeding suits data");

  const suits: ISuit[] = [
    { id: 1, suit: "Diamonds" },
    { id: 2, suit: "Clubs" },
    { id: 3, suit: "Hearts" },
    { id: 4, suit: "Spades" },
  ];

  await prisma.suit.createMany({
    data: suits,
  });

  console.log("Seeding rank data");
  const ranks: IRank[] = [
    { id: 1, rank: "Ace" },
    { id: 2, rank: "Two" },
    { id: 3, rank: "Three" },
    { id: 4, rank: "Four" },
    { id: 5, rank: "Five" },
    { id: 6, rank: "Six" },
    { id: 7, rank: "Seven" },
    { id: 8, rank: "Eight" },
    { id: 9, rank: "Nine" },
    { id: 10, rank: "Ten" },
    { id: 11, rank: "Jack" },
    { id: 12, rank: "Queen" },
    { id: 13, rank: "King" },
  ];

  await prisma.rank.createMany({
    data: ranks,
  });

  console.log("Seeding card data");
  const cardData: ICard[] = [];
  for (const rank of ranks) {
    for (const suit of suits) {
      const card: ICard = {
        suitId: suit.id,
        rankId: rank.id,
        cardName: `${rank.rank} of ${suit.suit}`,
      };
      cardData.push(card);
    }
  }

  await prisma.card.createMany({
    data: cardData,
  });

  console.log("Creating the Standrd 52-card deck data");

  const deck = await prisma.deck.create({
    data: {
      deckName: "Standard 52-card deck",
    },
  });

  const cardDeck: ICardDeck[] = [];
  for (let i = 0; i < cardData.length; i++) {
    const cardId = i + 1;
    const cardDeckItem: ICardDeck = {
      cardId: cardId,
      deckId: deck.id,
    };
    cardDeck.push(cardDeckItem);
  }

  await prisma.cardDeck.createMany({
    data: cardDeck,
  });
}

async function gameSetup() {
  console.log("Creating the blackjack game");
  const blackjack: IGame = {
    gameName: "Blackjack",
    deckId: 1,
    minPlayers: 2,
    maxPlayers: 7,
  };
  await prisma.game.create({
    data: blackjack,
  });

  console.log("Creating the poker game");
  const poker: IGame = {
    gameName: "Poker",
    deckId: 1,
    minPlayers: 2,
    maxPlayers: 10,
    bigBlind: 2,
    smallBlind: 1,
  };
  await prisma.game.create({
    data: poker,
  });

  console.log("Creating the dai di game");
  const daidi: IGame = {
    gameName: "Dai-Di",
    deckId: 1,
    minPlayers: 4,
    maxPlayers: 4,
  };
  await prisma.game.create({
    data: daidi,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
