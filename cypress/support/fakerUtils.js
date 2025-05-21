// fakerUtils.js
const { faker } = require('@faker-js/faker');

function gerarUsuario() {
  return {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    telefone: faker.phone.number('##########'),
    endereco: faker.location.streetAddress(),
    cidade: faker.location.city(),
    estado: faker.location.state(),
    cep: faker.location.zipCode('#####'),
    empresa: faker.company.name(),
  };
}

module.exports = { gerarUsuario };
