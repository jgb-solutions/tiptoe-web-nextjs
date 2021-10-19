/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `image`,
    ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `admin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `avatar` VARCHAR(191),
    ADD COLUMN `first_login` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `gender` VARCHAR(191),
    ADD COLUMN `isNew` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `is_model` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `modelId` VARCHAR(191),
    ADD COLUMN `pmLastFour` VARCHAR(191),
    ADD COLUMN `telephone` VARCHAR(191),
    ADD COLUMN `user_type` VARCHAR(191);

-- CreateTable
CREATE TABLE `Model` (
    `id` VARCHAR(191) NOT NULL,
    `stage_name` VARCHAR(191) NOT NULL,
    `bucket` VARCHAR(191) NOT NULL,
    `poster` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NOT NULL,
    `facebook` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NOT NULL,
    `twitter` VARCHAR(191) NOT NULL,
    `youtube` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NOT NULL,
    `followed_by_me` BOOLEAN NOT NULL,
    `new_follower_count` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `photos_count` INTEGER NOT NULL,
    `followers_count` INTEGER NOT NULL,

    UNIQUE INDEX `Model_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModelAccount` (
    `id` VARCHAR(191) NOT NULL,
    `modelId` VARCHAR(191) NOT NULL,
    `account` INTEGER NOT NULL,
    `balance` INTEGER NOT NULL,

    UNIQUE INDEX `ModelAccount_modelId_key`(`modelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photo` (
    `id` VARCHAR(191) NOT NULL,
    `uri` VARCHAR(191),
    `bucket` VARCHAR(191),
    `caption` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NOT NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `for_my_model` BOOLEAN NOT NULL DEFAULT false,
    `hash` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `publish` BOOLEAN NOT NULL DEFAULT false,
    `categoryId` VARCHAR(191) NOT NULL,
    `modelId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PhotoToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PhotoToUser_AB_unique`(`A`, `B`),
    INDEX `_PhotoToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Model` ADD CONSTRAINT `Model_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModelAccount` ADD CONSTRAINT `ModelAccount_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotoToUser` ADD FOREIGN KEY (`A`) REFERENCES `Photo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotoToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
