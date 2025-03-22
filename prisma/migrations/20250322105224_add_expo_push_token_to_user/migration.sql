/*
  Warnings:

  - You are about to drop the column `expoPushToken` on the `clientes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "expoPushToken";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "expoPushToken" TEXT;
