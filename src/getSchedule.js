const data = require('../data/zoo_data');

// verifica se o animal passado está disponível
function animalDisponivel(animal) {
  return data.species.filter((element) => element.name === animal)[0]
    .availability; // dias da semana
}
// console.log(animalDisponivel('tigers')); // funcionando ok

// verifica o horário de funcionamento para o dia passado no parametro
function horarioFuncionamento(day) {
  if (data.hours[day].open === 0) {
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
}
// console.log(horarioFuncionamento('Tuesday')); // funcionando ok

function pegarAnimais(dia) {
  const arrayNomesEspecie = [];
  data.species.forEach((element) => {
    if (element.availability.includes(dia)) {
      arrayNomesEspecie.push(element.name);
    }
  });
  if (arrayNomesEspecie.length === 0) return 'The zoo will be closed!';
  return arrayNomesEspecie;
}
// console.log(pegarAnimais('Monday'));

function getSchedule(scheduleTarget) {
  const objeto = {};
  const dias = Object.keys(data.hours);
  const animais = data.species.map((element) => element.name);
  if (!scheduleTarget || (!dias.includes(scheduleTarget) && !animais.includes(scheduleTarget))) {
    dias.forEach((dia) => {
      const exhibition = pegarAnimais(dia);
      const officeHour = horarioFuncionamento(dia);
      objeto[dia] = { officeHour, exhibition };
    });
    return objeto;
  }
  if (dias.includes(scheduleTarget)) {
    const exhibition = pegarAnimais(scheduleTarget);
    const officeHour = horarioFuncionamento(scheduleTarget);
    objeto[scheduleTarget] = { officeHour, exhibition };
    return objeto;
  }
  return animalDisponivel(scheduleTarget);
}

// console.log(getSchedule());

module.exports = getSchedule;
/* A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

Observações técnicas

Analise os testes unitários para entender os retornos que são esperados para esta função;
Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.
O que será avaliado

Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição. */
