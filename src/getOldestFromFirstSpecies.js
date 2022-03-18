const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsavel = data.employees.find((element) => element.id === id)
    .responsibleFor[0]; // encontrar o id do responsável por

  const animalMaisVelho = data.species.find(
    (element) => element.id === responsavel,
  ).residents; // encontar o animal mais velho

  const animalArray = animalMaisVelho.reduce(
    (acc, element) => {
      if (element.age > acc[2]) {
        return [element.name, element.sex, element.age]; // retorna animal[0], sexo[1] e idade[2] num array
      }
      return acc;
    },
    [undefined, undefined, 0],
  ); // undefined[0], undefined[1], 0[2] (valor inicial do reduce)
  return animalArray;
}

module.exports = getOldestFromFirstSpecies;
