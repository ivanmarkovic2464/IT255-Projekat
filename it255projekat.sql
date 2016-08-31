-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2016 at 10:58 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `it255projekat`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `token2` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `token2`) VALUES
(1, 'admin', 'admin', '2ae638bffb3a43492f6ed504395b866c8d7af803');

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE IF NOT EXISTS `korisnici` (
  `korisnici_ID` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `adresa` varchar(100) COLLATE utf8_bin NOT NULL,
  `ulica` varchar(100) COLLATE utf8_bin NOT NULL,
  `telefon` varchar(100) COLLATE utf8_bin NOT NULL,
  `token` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`korisnici_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`korisnici_ID`, `firstname`, `lastname`, `username`, `password`, `adresa`, `ulica`, `telefon`, `token`) VALUES
(1, 'ivan', 'markovic', 'ivkee', '3162eede35de759b43ad6adcc31c4899', 'Beograd', 'knez mihajlova 10', '123456789', '9ae1021b7fbb5fb3bae6db663922d730b2c9579d');

-- --------------------------------------------------------

--
-- Table structure for table `korpa`
--

CREATE TABLE IF NOT EXISTS `korpa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proizvodi_ID` int(10) NOT NULL,
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `NAZIV` varchar(200) DEFAULT NULL,
  `model` varchar(200) DEFAULT NULL,
  `cena` int(100) DEFAULT NULL,
  `garancija` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `proizvodi`
--

CREATE TABLE IF NOT EXISTS `proizvodi` (
  `proizvodi_ID` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(120) DEFAULT NULL,
  `cena` int(10) DEFAULT NULL,
  `garancija` varchar(20) DEFAULT NULL,
  `boja` varchar(50) NOT NULL,
  `tezina` varchar(10) NOT NULL,
  `proizvodjac` varchar(100) NOT NULL,
  `TIP_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`proizvodi_ID`),
  KEY `model` (`model`),
  KEY `model_2` (`model`),
  KEY `DEO_ID` (`TIP_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=131 ;

--
-- Dumping data for table `proizvodi`
--

INSERT INTO `proizvodi` (`proizvodi_ID`, `model`, `cena`, `garancija`, `boja`, `tezina`, `proizvodjac`, `TIP_ID`) VALUES
(130, 'AE34', 24000, '2 godine', 'crvena', '2.5kg', 'Asus', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tip`
--

CREATE TABLE IF NOT EXISTS `tip` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAZIV` varchar(120) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `tip`
--

INSERT INTO `tip` (`ID`, `NAZIV`) VALUES
(1, 'monitor'),
(2, 'laptop'),
(3, 'slušalice'),
(4, 'zvucnici'),
(5, 'kuciste'),
(6, 'kamera'),
(7, 'štampac');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `proizvodi`
--
ALTER TABLE `proizvodi`
  ADD CONSTRAINT `FK_RELATIONSHIP_3` FOREIGN KEY (`TIP_ID`) REFERENCES `tip` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
