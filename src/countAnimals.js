const data = require('../data/zoo_data');

function countAnimals(animal) {
  const objeto = {};
  if (!animal) {
    data.species.forEach((element) => {
      objeto[element.name] = element.residents.length;
    });
    return objeto;
  }
}

module.exports = countAnimals;
