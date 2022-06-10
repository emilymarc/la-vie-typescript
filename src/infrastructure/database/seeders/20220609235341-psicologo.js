'use strict';

let seed = []
for (let i=0; i<10; i++){
  const { faker } = require("@faker-js/faker")
  const fakeName = faker.name.findName()
  const fakeEmail = faker.internet.email()
  const fakeApresentação = faker.lorem.lines(3)
  
  seed.push(
    {
      nome: fakeName,
      email: fakeEmail,
      apresentacao: fakeApresentação,
      createdAt: new Date(),
      updatedAt: new Date(), 
    }
  )
}

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('Psicologo', seed) 
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Psicologo', null, {});
  
  }
};
