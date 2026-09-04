-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : jeu. 30 juil. 2026 à 14:33
-- Version du serveur : 10.3.39-MariaDB
-- Version de PHP : 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `budget-location`
--
CREATE DATABASE IF NOT EXISTS `budget-location` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `budget-location`;

-- --------------------------------------------------------

--
-- Structure de la table `account`
--

DROP TABLE IF EXISTS `account`;
CREATE TABLE IF NOT EXISTS `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `account`
--

INSERT INTO `account` (`id`, `email`, `password`, `role`) VALUES
(1, 'aaa@aaa.com', '$2y$10$gQErlqt8yKW4RtWGkY11luE8R9EyMSoj.h2kAwk6oAnOEPlV5SLdK', 1),
(2, 'bbb@bbb.com', '$2y$10$.U4OyhLRf8OjYMrkgD48keMpNPtgjQzMbDSkSzkLDOIWb4cVXNxZy', 0);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `title`, `description`, `image`, `alt`) VALUES
(1, 'Chariot', 'Vivamus leo tortor, finibus ut porta ac, placerat sed arcus.', 'chariot.png', 'Suspendisse malesuada, ipsum ornare imperdiet maximus, purus tellus malesuada risus'),
(2, 'Couverture', 'Esse in voluptate exercitation ea. Lorem sit duis ipsum voluptate ullamco eu cillum eu occaecat dolore.', 'couverture.png', 'Etiam feugiat massa vitae condimentum posuere.');

-- --------------------------------------------------------

--
-- Structure de la table `truck`
--

DROP TABLE IF EXISTS `truck`;
CREATE TABLE IF NOT EXISTS `truck` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `maker` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `truck`
--

INSERT INTO `truck` (`id`, `maker`, `model`, `image`) VALUES
(3, 'Dodge', 'RAM ProMaster 2026', 'Dodge-RAM-Promaster-2026.avif'),
(4, 'Ford', 'E-Transit 2025', 'Ford-E-Transit-2025.avif');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
