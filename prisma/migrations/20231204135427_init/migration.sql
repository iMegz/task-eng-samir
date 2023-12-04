-- CreateTable
CREATE TABLE `Model` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `brand` VARCHAR(10) NOT NULL,
    `model` VARCHAR(10) NOT NULL,
    `color` VARCHAR(10) NOT NULL,
    `price` DECIMAL(12, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
