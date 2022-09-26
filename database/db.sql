-- MySQL Script generated by MySQL Workbench
-- Sun Sep 25 20:30:21 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE  `username_UNIQUE` (`username`),
  UNIQUE  `email_UNIQUE` (`email` ) );


-- -----------------------------------------------------
-- Table `mydb`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`client` (
  `idclient` VARCHAR(15) NOT NULL,
  `client_email` VARCHAR(45) NOT NULL,
  `direction` VARCHAR(45) NOT NULL,
  `full_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idclient`),
  UNIQUE INDEX `client_email_UNIQUE` (`client_email` ) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`service` (
  `idservices` VARCHAR(45) NOT NULL,
  `name_service` VARCHAR(45) NULL,
  `client_idclient` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idservices`),
  INDEX `fk_service_client1_idx` (`client_idclient` ) ,
  CONSTRAINT `fk_service_client1`
    FOREIGN KEY (`client_idclient`)
    REFERENCES `mydb`.`client` (`idclient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`petition`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`petition` (
  `idpettion` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `create_time` TIMESTAMP NOT NULL,
  `client_idclient` VARCHAR(15) NOT NULL,
  `plataform` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpettion`, `client_idclient`),
  INDEX `fk_petition_client1_idx` (`client_idclient` ) ,
  CONSTRAINT `fk_petition_client1`
    FOREIGN KEY (`client_idclient`)
    REFERENCES `mydb`.`client` (`idclient`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`type_service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`type_service` (
  `idtype_service` VARCHAR(45) NOT NULL,
  `service_type` VARCHAR(45) NULL,
  `service_idservices` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtype_service`),
  INDEX `fk_type_service_service1_idx` (`service_idservices` ) ,
  CONSTRAINT `fk_type_service_service1`
    FOREIGN KEY (`service_idservices`)
    REFERENCES `mydb`.`service` (`idservices`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;





