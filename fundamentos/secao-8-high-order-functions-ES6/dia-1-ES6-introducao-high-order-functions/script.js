/* Crie uma função que retorne um objeto no formato {
  nomeCompleto,
  email
}
representando uma nova pessoa contratada.Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa @trybe.com.
 */

const newEmployees = (callback1, callback2) => {
  const employees = {
    id1: callback1('Pedro Guerra', callback2),
    id2: callback1('Luiza Drumond', callback2),
    id3: callback1('Carla Paiva', callback2),
  }
  return employees;
};

function createPerson(name, callback) {
  const person = {
    nomeCompleto: name,
    email: callback(name),
  }
  return person;
}

function generateEmail(name) {
  const formatedName = name.replace(' ', '_').toLowerCase()
  const email = `${formatedName}@trybe.com`
  return email;
}

const employyList = newEmployees(createPerson, generateEmail)

console.log(employyList);