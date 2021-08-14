-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 14, 2021 at 04:42 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biblioteca`
--

-- --------------------------------------------------------

--
-- Table structure for table `libro`
--

DROP TABLE IF EXISTS `libro`;
CREATE TABLE IF NOT EXISTS `libro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `autor` varchar(50) NOT NULL,
  `estado` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `libro`
--

INSERT INTO `libro` (`id`, `titulo`, `autor`, `estado`) VALUES
(1, 'El elefante desaparece', 'Haruki Murakami', 'Revision'),
(2, 'Frankenstein', 'Mary Shelley', 'Prestado'),
(3, 'Vamos a calentar el sol', 'Jose Mauro de Vasconcelos', 'Disponible'),
(4, 'Cometas en el cielo', 'Khaled Hosseini', 'Disponible'),
(5, 'Indias Blancas', 'Florencia Bonelli', 'Disponible'),
(6, 'El principito', 'Antoine de Saint-Exupery ', 'Revision'),
(10, 'La invencion de morel', 'Adolfo Bioy Casares', 'Disponible'),
(9, 'Ficciones', 'Jorge Luis Borges', 'Disponible'),
(12, 'Tokio Blues', 'Haruki Murakami', 'Disponible'),
(13, 'Cien años de soledad', 'Gabriel Garcia Marquez', 'Disponible'),
(14, 'El amor en tiempos de colera', 'Gabriel Garcia Marquez', 'Disponible'),
(15, 'Bestiario', 'Julio Cortazar', 'Disponible'),
(16, 'Mi planta de naranja lima', 'Jose Mauro de Vasconcelos', 'D'),
(17, 'La sombra del viento', 'Carlos Ruiz Zafon', 'Prestado'),
(18, 'LibroPrueba', 'Sofi Azcoaga', 'Disponible'),
(19, 'Cronicas marcianas', 'Ray Bradbury', 'Revision'),
(20, 'Juegos de ingenio', 'John Katzenbach', 'Disponible');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
