const { species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalName = species
    .find((element) => element.name === animal)
    .residents.every((element) => element.age >= age);

  return animalName;
}
console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
