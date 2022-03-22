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

// busca empregado por nome
function encontraEmpregadoPorNome(name) {
  const encontraPorNome = employees
  .find((element) => element.firstName === name || element.lastName);
  if (!encontraEmpregadoPorNome) {
    throw new Error('Informações inválidas');
  }
  return encontraEmpregadoPorNome;
}

// trata os dados do empregado para retorno
function trataEmpregado(encontradoTodos) {
  let especies = [];
  let localizacao = [];
  encontradoTodos.responsibleFor.forEach((element) => {
    const especieAnimal = encontraEmpregadoPorId(element);
    especies.push(especieAnimal.name);
    localizacao.push(especieAnimal.location);
  })
  const objetoParaRetornar = {
    id: encontradoTodos.id,
    fullName: `${encontradoTodos.firstName} ${encontradoTodos.lastName}`,
    locations: localizacao,
  };
  return objetoParaRetornar;
}

function getEmployeesCoverage(employee) {

}

module.exports = getEmployeesCoverage;
