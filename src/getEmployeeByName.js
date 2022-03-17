const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) { // busca empregado pelo nome
  const empregado = employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return empregado === undefined ? {} : empregado;
}

module.exports = getEmployeeByName;
