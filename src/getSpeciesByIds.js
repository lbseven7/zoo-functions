const data = require('../data/zoo_data');

// function tradicional
function getSpeciesByIds(...ids) {
  const animalId = data.species.filter((animal) => ids.includes(animal.id ));
  return animalId;
}

// usando arrow function
// const getSpeciesByIds = (...ids) => data.species.filter((animal) => ids.includes(animal.id));

module.exports = getSpeciesByIds;
