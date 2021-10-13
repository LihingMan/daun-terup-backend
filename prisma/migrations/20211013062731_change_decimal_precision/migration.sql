/*
  Warnings:

  - You are about to alter the column `moveTimeLimit` on the `Deal` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `score` on the `DealOrder` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `score` on the `Participant` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - Added the required column `roomId` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deal" ALTER COLUMN "moveTimeLimit" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "DealOrder" ALTER COLUMN "score" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "roomId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "score" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "userName" DROP NOT NULL;
