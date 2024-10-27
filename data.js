// data.js

// Configuration des chambres
const chambres = [
  {
    nom: "Chambre 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "Assets/Images/room-1.png",
    prix: "250 $",
    note: 5,
    hotel: "Pullman",
  },
  {
    nom: "Chambre 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "Assets/Images/room-2.png",
    prix: "200 $",
    note: 4,
    hotel: "Pullman",
  },
  {
    nom: "Chambre 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "Assets/Images/room-3.png",
    prix: "300 $",
    note: 4.5,
    hotel: "Kin Plaza",
  },
  {
    nom: "Chambre 4",
    description: "Chambre spacieuse avec vue sur la mer.",
    image: "Assets/Images/room-4.png",
    prix: "350 $",
    note: 4.8,
    hotel: "Hôtel de l'Atlantique",
  },
  {
    nom: "Chambre 5",
    description: "Chambre confortable avec des équipements modernes.",
    image: "Assets/Images/room-5.png",
    prix: "220 $",
    note: 4.2,
    hotel: "Royal Hotel",
  },
  {
    nom: "Chambre 6",
    description: "Chambre élégante avec un grand balcon.",
    image: "Assets/Images/room-6.png",
    prix: "280 $",
    note: 4.7,
    hotel: "Palace Hotel",
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////

// Configuration des hôtels
const hotels = [
  {
    nom: "Pullman",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "Assets/Images/pulman.jpeg",
    prix: "150 $",
    note: 4.5,
    chambres: ["Chambre 1", "Chambre 2"],
  },
  {
    nom: "Kin Plaza",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "Assets/Images/kinplaza.jpeg",
    prix: "180 $",
    note: 4,
    chambres: ["Chambre 3"],
  },
  {
    nom: "Hôtel de l'Atlantique",
    description: "Hôtel de luxe situé au bord de la mer.",
    image: "Assets/Images/hotel-atlantique.jpeg",
    prix: "200 $",
    note: 4.6,
    chambres: ["Chambre 4"],
  },
  {
    nom: "Royal Hotel",
    description: "Hôtel raffiné avec des services haut de gamme.",
    image: "Assets/Images/royalhotel.jpeg",
    prix: "250 $",
    note: 4.7,
    chambres: ["Chambre 5"],
  },
  {
    nom: "Palace Hotel",
    description: "Palais historique offrant un hébergement exceptionnel.",
    image: "Assets/Images/palacehotel.jpeg",
    prix: "300 $",
    note: 4.9,
    chambres: ["Chambre 6"],
  },
];
