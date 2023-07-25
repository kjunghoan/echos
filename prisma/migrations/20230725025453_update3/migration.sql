/*
  Warnings:

  - You are about to drop the column `viewSize` on the `Messages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Messages" DROP COLUMN "viewSize",
ALTER COLUMN "autoDeleteTime" DROP NOT NULL;
