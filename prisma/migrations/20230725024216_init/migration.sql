/*
  Warnings:

  - Added the required column `autoDeleteTime` to the `Messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viewSize` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Messages" ADD COLUMN     "autoDelete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "autoDeleteTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "latitude" INTEGER NOT NULL,
ADD COLUMN     "longitude" INTEGER NOT NULL,
ADD COLUMN     "viewSize" INTEGER NOT NULL,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
