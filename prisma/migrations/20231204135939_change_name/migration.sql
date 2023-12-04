/*
  Warnings:

  - You are about to drop the `model` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `model`;

-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `brand` VARCHAR(10) NOT NULL,
    `model` VARCHAR(10) NOT NULL,
    `color` VARCHAR(10) NOT NULL,
    `price` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
