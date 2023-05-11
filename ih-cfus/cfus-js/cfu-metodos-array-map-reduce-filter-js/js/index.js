const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const citiesPrimerLetra = (array) => {
  return array.map((cities) => {
    return cities[0].toUpperCase() + cities.slice(1);
  });
};
console.table(citiesPrimerLetra(cities));

/////////////////////////////////////////

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

const promedioNotas = students.map((promedio) => {
  const promedioEstudiante =
    promedio.finalExam * 0.6 + (promedio.firstProject + promedio.secondProject) * 0.4;

  return {
    Nombre: promedio.name,
    promedioEstudiante: parseInt(promedioEstudiante.toFixed(0)),
  };
});

console.table(promedioNotas);

/////////////////////////////////////////

const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

const promedioCalorias = menu.reduce((contador, valor) => {
  return contador + valor.calories / menu.length;
}, 0);

console.log(promedioCalorias);

/////////////////////////////////////////

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacturer: "Amazon",
  reviews: [
    { user: "Pavel Nedved", comments: "Really good!", rate: 4 },
    { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
    { user: "David Recoba", comments: "Awesome", rate: 5 },
    { user: "Jose Romero", comments: "Good value for the money", rate: 4 },
    { user: "Antonio Cano", comments: "It broke really fast", rate: 2 },
  ],
};

const promedioRates = product.reviews.reduce((contador, valor) => {
  return contador + valor.rate / product.reviews.length;
}, 0);

console.table(parseFloat(promedioRates.toFixed(2)));

/////////////////////////////////////////

const numbers = [1, 60, 112, 123, 100, 99, 73];


const numerosImpares = numbers.filter((elemento) => {
    return elemento % 2 && elemento < 100
} )

console.table(numerosImpares);

/////////////////////////////////////////

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 20 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 },
    { name: "Bill", age: 19 },
  ];


  const olderThan21 = people.filter((elemento) => {
    return  elemento.age <= 21
  })
   
  console.table(olderThan21);

  /////////////////////////////////////////

  const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: "Private Room",
      pool: true,
      garage: false,
    },
    {
      title: "Private apartment",
      price: 190,
      type: "Entire Place",
      pool: true,
      garage: true,
    },
    {
      title: "Apartment with awesome views",
      price: 400,
      type: "Entire Place",
      pool: false,
      garage: false,
    },
    {
      title: "Apartment in la Rambla",
      price: 150,
      type: "Private Room",
      pool: false,
      garage: true,
    },
    {
      title: "Comfortable place in Barcelona´s center",
      price: 390,
      type: "Entire place",
      pool: true,
      garage: true,
    },
    {
      title: "Room near Sagrada Familia",
      price: 170,
      type: "Private Room",
      pool: false,
      garage: false,
    },
    {
      title: "Great house next to Camp Nou",
      price: 140,
      type: "Entire place",
      pool: true,
      garage: true,
    },
    {
      title: "New apartment with 2 beds",
      price: 2000,
      type: "Entire place",
      pool: false,
      garage: true,
    },
    {
      title: "Awesome Suite",
      price: 230,
      type: "Private Room",
      pool: false,
      garage: false,
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: "Entire place",
      pool: true,
      garage: true,
    },
  ];
  

  const airbnb = places.filter((elemento) => {
    return elemento.pool == true
  })

  console.table(airbnb);