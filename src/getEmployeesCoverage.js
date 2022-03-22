const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// busca empregado por id
function encontraEmpregadoPorId(id) {
  const encontrado = employees.find((element) => element.id === id);
  if (!encontrado) {
    throw new Error('Informações inválidas');
  }
  return encontrado;
}

function encontraEmpregadoPorNome(name) {
  const encontraPorNome = employees
  .find((element) => element.firstName === name || element.lastName);
  if (!encontraEmpregadoPorNome) {
    throw new Error('Informações inválidas');
  }
  return encontraEmpregadoPorNome;
}

function getEmployeesCoverage(employee) {

}

module.exports = getEmployeesCoverage;
