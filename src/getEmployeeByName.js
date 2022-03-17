const { employees } = require('../data/zoo_data');
function getEmployeeByName(employeeName) {
  const empregado = employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return empregado === undefined ? {} : empregado;
}

module.exports = getEmployeeByName;
