/*
  Warnings:

  - You are about to drop the column `email` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `referralId` on the `Referral` table. All the data in the column will be lost.
  - Added the required column `courseRefer` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friendEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friendName` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yourName` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Referral` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    DROP COLUMN `referralId`,
    ADD COLUMN `courseRefer` VARCHAR(191) NOT NULL,
    ADD COLUMN `friendEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `friendName` VARCHAR(191) NOT NULL,
    ADD COLUMN `yourName` VARCHAR(191) NOT NULL;
