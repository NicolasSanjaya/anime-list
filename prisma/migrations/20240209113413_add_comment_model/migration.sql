-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NULL,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Comment_mal_id_user_email_username_key`(`mal_id`, `user_email`, `username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
