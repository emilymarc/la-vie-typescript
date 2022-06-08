'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('psicologo', { 
      id: Sequelize.INTEGER,
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      senha: Sequelize.STRING,
      apresentacao: Sequelize.STRING,
      createdAt: new Date(),
      updatedAt: new Date(),       
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('psicologo');

  }
};
