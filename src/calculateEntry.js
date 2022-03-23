const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const visitantes = entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      acc.child += 1;
    }
    if (curr.age >= 18 && curr.age < 50) {
      acc.adult += 1;
    }
    if (curr.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 }); // valor inicial
  return visitantes;
}

// caso não haja entrantes
function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const pessoas = countEntrants(entrants);
  return Object.keys(pessoas)
    .reduce((acc, element) => acc + (pessoas[element] * data.prices[element]), 0);
}

module.exports = { calculateEntry, countEntrants };
