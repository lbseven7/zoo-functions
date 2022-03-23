const data = require('../data/zoo_data');

function countAnimals(animal) {
  const objeto = {};
  if (!animal) {
    data.species.forEach((element) => {
      objeto[element.name] = element.residents.length;
    });
    return objeto;
  }

  if (!animal.sex) {
    return data.species
      .filter((element) => element.name === animal.specie)[0]
      .residents.length;
  }
  return data.species
    .filter((element) => element.name === animal.specie)[0]
    .residents.filter((element) => element.sex === animal.sex).length;
}

module.exports = countAnimals;
