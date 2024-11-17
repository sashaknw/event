INSERT INTO `VENUE` (`id`, `name`, `city_id`) 
VALUES 
(1, 'El Baladero', 1),
(2, 'Grancaventura', 2),
(4, 'Las Huesas', 3),
(5, 'Oasis', 4),
(6, 'Sala Faro', 1),
(7, 'Secret Location', 1);


INSERT INTO `EVENT` (`id`, `name`, `date_time`, `venue_id`) 
VALUES 
(1, 'Cenizas', '2024-12-12 22:00:00', 1),
(2, 'Blasfemia', '2025-02-16 23:00:00', 1),
(3, 'Sinapsis', '2024-10-24 23:00:00', 2),
(4, 'RAVEOUT', '2024-10-24 23:30:00', 4),
(5, 'Free2Feel', '2024-12-06 23:00:00', 4),
(6, 'HardWired', '2025-03-01 22:00:00', 1),
(7, 'VERTIGO', '2025-02-14 22:30:00', 7),
(8, 'Discontrol', '2024-11-01 22:00:00', 5),
(9, 'Asymetric', '2024-11-29 22:00:00', 2);

INSERT INTO `CITY` (`id`, `name`) 
VALUES 
(1, 'Las Palmas de Gran Canaria'),
(2, 'Arucas'),
(3, 'Telde'),
(4, 'Maspalomas');

INSERT INTO `ARTIST` (`id`, `name`, `description`) 
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

INSERT INTO `STYLE` (`id`, `name`) 
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
(18, 'Euro-Trance');

