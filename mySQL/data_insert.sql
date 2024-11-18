INSERT INTO `Venues`
VALUES 
(1, 'El Baladero', 1),
(2, 'Grancaventura', 2),
(4, 'Las Huesas', 3),
(5, 'Oasis', 4),
(6, 'Sala Faro', 1),
(7, 'Secret Location', 1);


INSERT INTO `Events` (`id`, `name`, `date_time`) 
VALUES 
(1, 'Cenizas', '2024-12-12 22:00:00'),
(2, 'Blasfemia', '2025-02-16 23:00:00'),
(3, 'Sinapsis', '2024-10-24 23:00:00'),
(4, 'RAVEOUT', '2024-10-24 23:30:00'),
(5, 'Free2Feel', '2024-12-06 23:00:00'),
(6, 'HardWired', '2025-03-01 22:00:00'),
(7, 'VERTIGO', '2025-02-14 22:30:00'),
(8, 'Discontrol', '2024-11-01 22:00:00'),
(9, 'Asymetric', '2024-11-29 22:00:00');

INSERT INTO `Cities` (`id`, `name`) 
VALUES 
(1, 'Las Palmas de Gran Canaria'),
(2, 'Arucas'),
(3, 'Telde'),
(4, 'Maspalomas');

INSERT INTO `Artists` (`id`, `name`, `description`) 
VALUES 
(1, 'Tanasoul', 'DJ y productor basado en Las Palmas de Gran Canaria. Fundador del sello SoulsenseRecords, evento VERTIGO y parte del duo Bangerlore.'),
(2, 'LWCI', 'DJ de raíces argentinas basada en Las Palmas de Gran Canaria, mezcla industrial techno, tekno y lo que le pida el alma, resultando en un sonido potente y una energía imparable.'),
(3, 'Damaso', 'DJ y parte de la Asociación Cultural el Baladero y eventos como Blasfemia BDSM Fest. Mezcla estilos como hardcore gabber, el techno industrial y frenchcore. Todo con un estilo intrépido.'),
(4, 'Shaydy', 'DJ y diseñadora de moda panameña. Trae sonidos percusivos con melodías seductoras, ritmos polirrítmicos en géneros como el breakbeat, ghettotech o footwork.'),
(5, 'Hunny Bunny', 'Self-defined melómana inspirada en el underground de los hubs de electrónica de toda Europa, mezcla house, ghetto y electro. Crea sesiones raw y gamberras pero con su toque de finura.'),
(6, 'Baby Lia', 'DJ, productora y diseñadora. Saca su inspiración del movimiento ravero de la isla y lo refleja en todo su arte.'),
(7, 'Ninf.A', 'Multidisciplinar it girl de la vanguardia islenia. Su sonido combina el folklore con el rollo oscuro y cargado de fuerza.'),
(8, 'Marisol García', 'Productora, DJ y promotora establecida en la isla gracias a los eventos como Asymetric o PULSAR. De manera consistente sus sets incluyen techno, acid con toques del sonido actual.'),
(9, 'astro babe', 'DJ colaboradora en el evento VERTIGO. Explora hard techno e industrial para conseguir un vibe nostálgico, oscuro, pero con ocasionales melodías dulces.'),
(10, 'DGAS', 'DJ y fundador del evento Free2Feel. Marca su sonido con géneros como el hard groove, techno y hard techno.'),
(11, 'kli_kiti', 'Uno de los pilares del sonido isleño actual a través de la Asociación Cultural el Baladero. DJ con un estilo dinámico, experimentado y con sonidos del breakbeat, ghetto y otras mil cositas.'),
(12, 'Apoklope', 'DJ de hard groove e industrial. Sets con consistencia, potencia y una energía aporreante en el mejor sentido de la palabra.'),
(13, 'Víctor Juliá', ''),
(14, 'WeedFyx', 'DJ con sonidazo dinámico de ghettotech y hardgroove. Parte del colectivo blacksheepss y la Asociación Cultural el Baladero.'),
(15, 'Ace2Rave', 'DJ fiel del hard industrial techno. Mezcla la oscuridad con warehouse y el hardbass ruso.'),
(16, 'Funke', 'DJ que contagia con sus irresistibles beats de house y funk. Sus sets enérgicos combinan ritmos llenos de groove y bajos profundos, creando un rollo positivo y vibrante en la pista.'),
(17, 'Richarson', 'DJ de techno y hard techno, lleva al límite la pista con sus pulsos agresivos y energía imparable.'),
(18, 'Woodhands', 'DJ y uno de los pilares del movimiento Pub Pelukas. Digital o vinilo, breakbeat o grime, siempre tropical.'),
(19, 'Felix Strizzi', 'DJ y parte del duo Bangerlore. Representante de sonidos dulzones y muy bailables a través del trance, groovy, y altos BPMs.'),
(20, 'Wyvan Cat', 'Desde el house al techno, Wyvan Cat genera un ambientazo en la pista con sus sets intencionales y bailables.');

INSERT INTO `Styles` (`id`, `name`) 
VALUES 
(1, 'Techno'),
(2, 'Hard Techno'),
(3, 'Industrial Techno'),
(4, 'Acid Techno'),
(5, 'Acid House'),
(6, 'Trance'),
(7, 'Breakbeat'),
(8, 'Ghetto Tech'),
(9, 'Hardcore'),
(10, 'UK Garage'),
(11, 'Grime'),
(12, 'Industrial'),
(13, 'Rave'),
(14, 'Schranz'),
(15, 'Footwork'),
(16, 'Funky House'),
(17, 'Electronica'),
(18, 'Euro-Trance'),
(19, 'Tekno'), /*estas dos por insertar*/
(20, 'Hardgroove'),/*estas dos por insertar*/
(21, 'House');

INSERT INTO `ARTISTSTYLE` (`ArtistId`, `StyleId`) 
VALUES
(1,1),
(1,20),
(2,3),
(2,19),
(3,9),
(3,3),
(4,7),
(4,8),
(4,15),
(5,21),
(5,8),
(5,17),
(6,13),
(6,2),
(7,17),
(8,1),
(8,4),
(9,2),
(9,6),
(9,3),
(10,20),
(10,1),
(10,2),
(11,7),
(11,8),
(11,10),
(12,1),
(12,3),
(12,20),
(13,1),
(13,2),
(13,14),
(14,8),
(14,20),
(15,12),
(15,3),
(16,16),
(16,20),
(17,2),
(17,1),
(18,7),
(18,11),
(19,6),
(19,18),
(20,21),
(20,1);

