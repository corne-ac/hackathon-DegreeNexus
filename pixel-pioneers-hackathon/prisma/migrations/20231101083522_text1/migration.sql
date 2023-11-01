/*
  Warnings:

  - Added the required column `linktitle` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "linktitle" VARCHAR(255) NOT NULL;
