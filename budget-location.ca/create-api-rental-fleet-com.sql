-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : sam. 29 août 2026 à 12:55
-- Version du serveur : 10.3.39-MariaDB
-- Version de PHP : 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de données : `api-rental-fleet-com`
--

CREATE DATABASE IF NOT EXISTS `api-rental-fleet-com` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `api-rental-fleet-com`;

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `price` int(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `name`, `picture`, `price`) VALUES
(1, 'Hand Cart', 'hand-cart.avif', 118),
(2, 'Moving Blanket', 'moving-blanket.avif', 24),
(3, 'Packaging Tape', 'packaging-tape.avif', 19);

COMMIT;

