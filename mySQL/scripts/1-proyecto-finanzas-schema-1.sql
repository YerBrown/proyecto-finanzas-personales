-- MySQL Script generated by MySQL Workbench
-- Thu Nov 14 12:18:42 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema Proyecto_Finanzas
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Proyecto_Finanzas` ;

-- -----------------------------------------------------
-- Schema Proyecto_Finanzas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Proyecto_Finanzas` DEFAULT CHARACTER SET utf8mb3 ;
USE `Proyecto_Finanzas` ;

-- -----------------------------------------------------
-- Table `Proyecto_Finanzas`.`expense_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Finanzas`.`expense_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `Proyecto_Finanzas`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Finanzas`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(40) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rol` ENUM('client', 'admin') NOT NULL DEFAULT 'client',
  `active` TINYINT NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `Proyecto_Finanzas`.`expense`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Finanzas`.`expense` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` INT NOT NULL DEFAULT '0',
  `title` VARCHAR(45) NOT NULL,
  `comment` VARCHAR(200) NULL DEFAULT NULL,
  `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_expense_expense_type1_idx` (`type_id` ASC) VISIBLE,
  INDEX `fk_expense_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_expense_expense_type1`
    FOREIGN KEY (`type_id`)
    REFERENCES `Proyecto_Finanzas`.`expense_type` (`id`),
  CONSTRAINT `fk_expense_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `Proyecto_Finanzas`.`user` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `Proyecto_Finanzas`.`income_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Finanzas`.`income_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `Proyecto_Finanzas`.`income`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Finanzas`.`income` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` INT NOT NULL DEFAULT '0',
  `title` VARCHAR(45) NOT NULL,
  `comment` VARCHAR(200) NULL DEFAULT NULL,
  `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_income_income_type_idx` (`type_id` ASC) VISIBLE,
  INDEX `fk_income_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_income_income_type`
    FOREIGN KEY (`type_id`)
    REFERENCES `Proyecto_Finanzas`.`income_type` (`id`),
  CONSTRAINT `fk_income_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `Proyecto_Finanzas`.`user` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
