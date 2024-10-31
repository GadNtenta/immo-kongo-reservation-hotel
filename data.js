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
];
