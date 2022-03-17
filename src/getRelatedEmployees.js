const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id))
}
console.log(isManager());

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
