CREATE TABLE `ArtistEvent` (
  `ArtistId` int NOT NULL,
  `EventId` int NOT NULL,
  PRIMARY KEY (`ArtistId`,`EventId`),
  KEY `EventId` (`EventId`),
  CONSTRAINT `ArtistEvent_ibfk_1` FOREIGN KEY (`ArtistId`) REFERENCES `Artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ArtistEvent_ibfk_2` FOREIGN KEY (`EventId`) REFERENCES `Events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `ArtistEvent` WRITE;
INSERT INTO `ArtistEvent` VALUES (1,4),(10,4),(13,4),(15,4),(1,5),(9,5),(10,5),(12,5),(5,6),(11,6),(14,6),(15,6),(1,7),(6,7),(9,7),(20,7),(1,8),(7,8),(13,8),(15,8),(1,9),(4,9),(8,9),(12,9),(3,10),(12,10),(17,10),(2,11),(3,11),(4,11),(15,11),(8,12),(12,12),(13,12),(17,12);
UNLOCK TABLES;

CREATE TABLE `Artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Artists` WRITE;

INSERT INTO `Artists` (`id`, `name`, `description`, `image_path`) VALUES 
(1, 'Tanasoul', 'DJ y productor basado en Las Palmas de Gran Canaria. Fundador del sello SoulsenseRecords, evento VERTIGO y parte del duo Bangerlore.', '../assets/DJs/Tanasoul2.jpg'),
(2, 'LWCI', 'DJ de raíces argentinas basada en Las Palmas de Gran Canaria, mezcla industrial techno, tekno y lo que le pida el alma, resultando en un sonido potente y una energía imparable.', NULL),
(3, 'Damaso', 'DJ y parte de la Asociación Cultural el Baladero y eventos como Blasfemia BDSM Fest. Mezcla estilos como hardcore gabber, el techno industrial y frenchcore. Todo con un estilo intrépido.', '../assets/artistas/Damaso.jpg'),
(4, 'Shaydy', 'DJ y diseñadora de moda panameña. Trae sonidos percusivos con melodías seductoras, ritmos polirrítmicos en géneros como el breakbeat, ghettotech o footwork.', NULL),
(5, 'Hunny Bunny', 'Self-defined melómana inspirada en el underground de los hubs de electrónica de toda Europa, mezcla house, ghetto y electro. Crea sesiones raw y gamberras pero con su toque de finura.', NULL),
(6, 'Baby Lia', 'DJ, productora y diseñadora. Saca su inspiración del movimiento ravero de la isla y lo refleja en todo su arte.', '../assets/artistas/Babylia.jpg'),
(7, 'Ninf.A', 'Multidisciplinar it girl de la vanguardia islenia. Su sonido combina el folklore con el rollo oscuro y cargado de fuerza.', NULL),
(8, 'Marisol García', 'Productora, DJ y promotora establecida en la isla gracias a los eventos como Asymetric o PULSAR. De manera consistente sus sets incluyen techno, acid con toques del sonido actual.', NULL),
(9, 'astro babe', 'DJ colaboradora en el evento VERTIGO. Explora hard techno e industrial para conseguir un vibe nostálgico, oscuro, pero con ocasionales melodías dulces.', '../assets/artistas/astro_babe.jpg'),
(10, 'DGAS', 'DJ y fundador del evento Free2Feel. Marca su sonido con géneros como el hard groove, techno y hard techno.', NULL),
(11, 'kli_kiti', 'Uno de los pilares del sonido isleño actual a través de la Asociación Cultural el Baladero. DJ con un estilo dinámico, experimentado y con sonidos del breakbeat, ghetto y otras mil cositas.', NULL),
(12, 'Apoklope', 'DJ de hard groove e industrial. Sets con consistencia, potencia y una energía aporreante en el mejor sentido de la palabra.', NULL),
(13, 'Víctor Juliá', '', NULL),
(14, 'WeedFyx', 'DJ con sonidazo dinámico de ghettotech y hardgroove. Parte del colectivo blacksheepss y la Asociación Cultural el Baladero.', NULL),
(15, 'Ace2Rave', 'DJ fiel del hard industrial techno. Mezcla la oscuridad con warehouse y el hardbass ruso.', NULL),
(16, 'Funke', 'DJ que contagia con sus irresistibles beats de house y funk. Sus sets enérgicos combinan ritmos llenos de groove y bajos profundos, creando un rollo positivo y vibrante en la pista.', NULL),
(17, 'Richarson', 'DJ de techno y hard techno, lleva al límite la pista con sus pulsos agresivos y energía imparable.', NULL),
(18, 'Woodhands', 'DJ y uno de los pilares del movimiento Pub Pelukas. Digital o vinilo, breakbeat o grime, siempre tropical.', NULL),
(19, 'Felix Strizzi', 'DJ y parte del duo Bangerlore. Representante de sonidos dulzones y muy bailables a través del trance, groovy, y altos BPMs.', NULL),
(20, 'Wyvan Cat', 'Desde el house al techno, Wyvan Cat genera un ambientazo en la pista con sus sets intencionales y bailables.', NULL),
(21, 'INRRA', 'Conocido por el evento Platatonik, es un representante de hard techno de la isla. Actualmente activo también en Madrid, trae sets de muy alta energía y BPM.', '../assets/artistas/Inrra.JPEG'),
(22, 'Strawberry Punch', 'DJ y organizadora de eventos con un abanico amplio de ambientes, desde house a techno y ritmos orientales o latinos. Conocida por su serie de eventos Eternal Spring Tribe.', '../assets/artistas/Strawberry_punch.jpg');



UNLOCK TABLES;

CREATE TABLE `ArtistStyle` (
  `ArtistId` int NOT NULL,
  `StyleId` int NOT NULL,
  PRIMARY KEY (`ArtistId`,`StyleId`),
  KEY `StyleId` (`StyleId`),
  CONSTRAINT `ArtistStyle_ibfk_1` FOREIGN KEY (`ArtistId`) REFERENCES `Artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ArtistStyle_ibfk_2` FOREIGN KEY (`StyleId`) REFERENCES `Styles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `ArtistStyle` WRITE;
INSERT INTO `ArtistStyle` VALUES (1,1),(8,1),(10,1),(12,1),(13,1),(17,1),(20,1),(6,2),(9,2),(10,2),(13,2),(17,2),(2,3),(3,3),(9,3),(12,3),(15,3),(8,4),(9,6),(19,6),(4,7),(11,7),(18,7),(4,8),(5,8),(11,8),(14,8),(3,9),(11,10),(18,11),(15,12),(6,13),(13,14),(4,15),(16,16),(5,17),(7,17),(19,18),(2,19),(1,20),(10,20),(12,20),(14,20),(16,20),(5,21),(20,21);
UNLOCK TABLES;

CREATE TABLE `Cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Cities` WRITE;
INSERT INTO `Cities` VALUES (1,'Las Palmas de Gran Canaria'),(2,'Arucas'),(3,'Telde'),(4,'Maspalomas');
UNLOCK TABLES;

CREATE TABLE `Events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date_time` datetime NOT NULL,
  `VenueId` int DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `VenueId` (`VenueId`),
  CONSTRAINT `Events_ibfk_1` FOREIGN KEY (`VenueId`) REFERENCES `Venues` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Events` WRITE;
INSERT INTO `Events` VALUES (1,'Exsqueezit','2025-04-13 22:30:00',2,'../assets/Carteles/ex-squeezit.jpg'),(2,'Pub Pelukas','2025-05-04 23:00:00',1,'../assets/Carteles/Pub_pelukas.jpg'),(3,'Land of Sense','2025-05-24 21:00:00',4,'../assets/Carteles/Land_of_sense.jpg'),(4,'RAVEOUT','2024-10-24 23:30:00',4,NULL),(5,'Free2Feel','2024-12-06 23:00:00',4,NULL),(6,'HardWired','2025-03-01 22:00:00',1,NULL),(7,'VERTIGO','2025-02-14 22:30:00',7,NULL),(8,'Discontrol','2024-11-01 22:00:00',5,NULL),(9,'Asymetric','2024-11-29 22:00:00',2,NULL),(10,'Cenizas','2024-12-12 22:00:00',1,NULL),(11,'Blasfemia','2025-02-16 23:00:00',1,NULL),(12,'Sinapsis','2024-10-24 23:00:00',2,NULL);
UNLOCK TABLES;

CREATE TABLE `Styles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Styles` WRITE;
INSERT INTO `Styles` VALUES (1,'Techno'),(2,'Hard Techno'),(3,'Industrial Techno'),(4,'Acid Techno'),(5,'Acid House'),(6,'Trance'),(7,'Breakbeat'),(8,'Ghetto Tech'),(9,'Hardcore'),(10,'UK Garage'),(11,'Grime'),(12,'Industrial'),(13,'Rave'),(14,'Schranz'),(15,'Footwork'),(16,'Funky House'),(17,'Electronica'),(18,'Euro-Trance'),(19,'Tekno'),(20,'Hardgroove'),(21,'House');
UNLOCK TABLES;

CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `role` enum('User','Admin','Artist') DEFAULT 'User',
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `name_2` (`name`),
  UNIQUE KEY `email_2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Users` WRITE;
INSERT INTO `Users` (`id`,`name`,`email`,`password`,`role`) VALUES (1,'astro babe','astro@example.com','$2b$10$FY3qqRpljXxBC8qQFmk07.P3CE0MU1jxVIvgy6KN8KcHMIr6C9Dl.','Artist');

UNLOCK TABLES;

CREATE TABLE `UserStyle` (
  `StyleId` int NOT NULL,
  `UserId` int NOT NULL,
  PRIMARY KEY (`StyleId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `UserStyle_ibfk_1` FOREIGN KEY (`StyleId`) REFERENCES `Styles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `UserStyle_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `UserStyle` WRITE;
INSERT INTO `UserStyle` VALUES (1,5);
UNLOCK TABLES;

CREATE TABLE `Venues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `CityId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `CityId` (`CityId`),
  CONSTRAINT `Venues_ibfk_1` FOREIGN KEY (`CityId`) REFERENCES `Cities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Venues` WRITE;
INSERT INTO `Venues` VALUES (1,'El Baladero',1),(2,'Grancaventura',2),(4,'Las Huesas',3),(5,'Oasis',4),(6,'Sala Faro',1),(7,'Secret Location',NULL);
UNLOCK TABLES;