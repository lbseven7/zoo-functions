const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  const emp = employees.find((nome) => nome.firstName === name || nome.lastName === name);
  return emp === undefined ? {} : emp;
}

module.exports = getEmployeeByName;
