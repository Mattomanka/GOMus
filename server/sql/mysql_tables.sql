--
-- Database: `GOMus`
-- Createb by: Ian Zablovshii
-- Date: 18.10.2015
-- --------------------------------------------------------
--
-- Structure for table `Tour`
--

CREATE TABLE IF NOT EXISTS `Tour` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
	`photo` VARCHAR(1000),
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `Tour` (`id`, `name`, `photo`) VALUES
(1, 'Tour 1', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg'),
(2, 'Tour 2', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg');

-- --------------------------------------------------------


--
-- Structure for table `Location`
--

CREATE TABLE IF NOT EXISTS `Location` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`idTour` INT(11)NOT NULL,
	`name` VARCHAR(30) NOT NULL, 
	`address` VARCHAR(50) NOT NULL, 
	`coordinates` VARCHAR(15) NOT NULL, 
	`rating` FLOAT(5) NOT NULL,
	`description` TEXT NOT NULL,
	`photo` VARCHAR(1000) NOT NULL,
	PRIMARY KEY (`id`),
	KEY `idTour` (`idTour`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- --------------------------------------------------------

--
-- Data for Tabel `Location`
--

INSERT INTO `Location` (`id`, `idTour`, `name`, `address`, `coordinates`, `rating`, `description`, `photo`) VALUES
(1, 1, 'Location 1', 'Govorova 11A', '46,28|30,43', 2.5, 'Описание 1 локации', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg'),
(2, 1, 'Location 2', 'Jukova 20B', '46,28|30,43', 3.0, 'Описание 2 локации', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg' ),
(3, 2, 'Location 3', 'Derebasovskaya 9', '46,28|30,43', 4.1, 'Описание 3 локации', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg' ),
(4, 2, 'Location 4', 'Moldovanka 18', '46,28|30,43', 5, 'Описание 4 локации', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg' );

-- --------------------------------------------------------

--
-- Structure for table `InnerLocation`
--

CREATE TABLE IF NOT EXISTS `InnerLocation` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`idLocation` INT(11) NOT NULL,
	`name` VARCHAR(30) NOT NULL,
	`description` TEXT(500) NOT NULL,
	`photo`	VARCHAR(1000) NOT NULL,
	PRIMARY KEY (`id`),
	KEY `idLocation` (`idLocation`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- --------------------------------------------------------
--
-- Data for Tabel `InnerLocation`
--

INSERT INTO `InnerLocation` (`id`, `idLocation`, `name`, `description`, `photo`) VALUES
(1, 1, 'InnerLocation for Loc 1', 'Description Inner1', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg'),
(2, 1, 'InnerLocation for Loc 1', 'Description Inner2', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg'),
(3, 2, 'InnerLocation for Loc 2', 'Description Inner3', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg'),
(4, 2, 'InnerLocation for Loc 2', 'Description Inner4', 'http://cdn3.vox-cdn.com/uploads/chorus_asset/file/917470/iphone-6-travel-photo-review-mann-header.0.jpg');

-- --------------------------------------------------------

--
-- Structure for table `Quest`
--

CREATE TABLE IF NOT EXISTS `Quest` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`idTour` INT NOT NULL,
	`allAnswers` TEXT NOT NULL,
	`question` TEXT NOT NULL,
	`rightAnswer` TEXT NOT NULL,
	PRIMARY KEY (`id`),
	KEY `idTour` (`idTour`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

--
-- Data for Tabel `Quest`
--

INSERT INTO `Quest` (`id`, `idTour`, `allAnswers`, `question`, `rightAnswer`) VALUES
(1, 1, 'Question\'s array', 'Question-Answer', 'Quest');

-- --------------------------------------------------------


--
-- Constraints for table `Location`
--
ALTER TABLE `Location`
	ADD CONSTRAINT FOREIGN KEY (`idTour`) REFERENCES `Tour` (`id`);

--
-- Constraints for table `Location`
--
ALTER TABLE `InnerLocation`
	ADD CONSTRAINT FOREIGN KEY (`idLocation`) REFERENCES `Location` (`id`);
	

--
-- Constraints der Tabelle `Quest`
--
ALTER TABLE `Quest`
	ADD CONSTRAINT FOREIGN KEY (`idTour`) REFERENCES `Tour` (`id`);
