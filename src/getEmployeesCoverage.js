// const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

// busca empregado por id
function encontraEmpregadoPorId(id) {
  const encontrado = employees.find((element) => element.id === id);
  if (!encontrado) {
    throw new Error('Informações inválidas');
  }
  return encontrado;
}
// console.log(encontraEmpregadoPorId('c1f50212-35a6-4ecd-8223-f835538526c2')); // funcionando ok

// busca empregado por nome
function encontraEmpregadoPorNome(name) {
  const encontraPorNome = employees
    .find((element) => element.firstName === name || element.lastName === name);
  if (!encontraPorNome) {
    throw new Error('Informações inválidas');
  }
  return encontraPorNome;
}

// console.log(encontraEmpregadoPorNome( { name: 'Ola' } )); // funcionando ok

// busca a espécie do animal por id
function pegaEspeciesPorId(id) {
  const especieId = species.find((element) => element.id === id);
  return especieId;
}

// console.log(pegaEspeciesPorId('01422318-ca2d-46b8-b66c-3e9e188244ed')); // funcionando ok

// trata os dados do empregado para retorno
function trataEmpregado(encontradoTodos) {
  const arrayEspecies = [];
  const arrayLocalizacao = [];
  encontradoTodos.responsibleFor.forEach((element) => {
    const especieAnimal = pegaEspeciesPorId(element);
    arrayEspecies.push(especieAnimal.name);
    arrayLocalizacao.push(especieAnimal.location);
  });
  const objetoParaRetornar = {
    id: encontradoTodos.id,
    fullName: `${encontradoTodos.firstName} ${encontradoTodos.lastName}`,
    species: arrayEspecies,
    locations: arrayLocalizacao,
  };
  return objetoParaRetornar;
}

function getEmployeesCoverage(employee) {
  let empregadoEncontrado = {};
  if (!employee) {
    empregadoEncontrado = employees.map((element) =>
      trataEmpregado(element));
  } else if (employee.id) {
    const encontrado = encontraEmpregadoPorId(employee.id); // RETORNA TODOS
    empregadoEncontrado = trataEmpregado(encontrado);
  } else {
    const encontrado = encontraEmpregadoPorNome(employee.name);
    empregadoEncontrado = trataEmpregado(encontrado);
  }
  return empregadoEncontrado;
}
// console.log(getEmployeesCoverage({ name: 'Stephanie' })); // funciona
// console.log(getEmployeesCoverage({ name: 'Spry' })); // funciona
// console.log('Imprime Ardith Azevado');
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' })); // funciona
// console.log('Imprime todos');
// console.log(getEmployeesCoverage()); // funciona
module.exports = getEmployeesCoverage;
