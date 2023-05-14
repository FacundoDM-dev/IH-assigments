const data = {
  name: {
    firstName: "ana",
    lastName: "marino",
  },
  isStudent: true,
  favoriteFootballTeam: "fc barcelona",
  hometown: {
    city: "buenos aires",
    country: "argentina",
  },
};

let {
  name: { firstName, lastName },
  isStudent,
  favoriteFootballTeam,
  hometown: { city, country },
} = data;

console.log(
  `el estudiante ${firstName} ${lastName} de ${city}, ${country} ama al equipo ${favoriteFootballTeam}`
);


///////////////////////


// const [a, b] = [1, 10];

// console.log(a * b);

const [a, b = 1] = [2];

console.log(a * b);

const greenSmoothie = {
  leaf: "spinach",
  veggie: "bok choy",
  seed: "ground flex seeds",
  nut: "peanut",
  liquid: "almond milk",
};



///////////////////////

const greenFuction = ({ leaf, veggie, seed, nut, liquid }) => {
  console.log(
    `Para hacer un batido, debes agregar: ${leaf}, ${veggie}, ${seed}, ${nut} y ${liquid}`
  );
};
greenFuction(greenSmoothie);
