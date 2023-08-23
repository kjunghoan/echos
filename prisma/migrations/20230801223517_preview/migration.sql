/*
  Warnings:

  - You are about to drop the column `autoDelete` on the `Messages` table. All the data in the column will be lost.
  - You are about to drop the column `autoDeleteTime` on the `Messages` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `Messages` table. All the data in the column will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_usersId_fkey";

-- AlterTable
ALTER TABLE "Messages" DROP COLUMN "autoDelete",
DROP COLUMN "autoDeleteTime",
DROP COLUMN "usersId";

-- DropTable
DROP TABLE "Users";
