-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 06 oct. 2022 à 14:43
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `format-json`
--

-- --------------------------------------------------------

--
-- Structure de la table `json_file`
--

DROP TABLE IF EXISTS `json_file`;
CREATE TABLE IF NOT EXISTS `json_file` (
  `ID_file` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `ID_user` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_file`),
  KEY `ID_user` (`ID_user`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `json_file`
--

INSERT INTO `json_file` (`ID_file`, `file_name`, `ID_user`) VALUES
('1664882324159', 'data.json', '1728317635623'),
('1664964146496', 'data.json', '1728317635623'),
('1664964753447', 'data.json', '1728317635623'),
('1664976980799', 'data.json', '1728317635623');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ID_user` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_user`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`ID_user`, `email`, `password`) VALUES
('1728317635623', 'wahbi@gmail.com', 'open&Sesame');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
