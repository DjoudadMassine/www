-- -----------------------------------------------------
-- Schema dbdarquest17
-- -----------------------------------------------------
DROP SCHEMA `dbdarquest17`;

CREATE SCHEMA IF NOT EXISTS `dbdarquest17` DEFAULT CHARACTER SET utf8mb4 ;

USE `dbdarquest17` ;

-- -----------------------------------------------------
-- Table `dbdarquest17`.`type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbdarquest17`.`type` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

