'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('paciente', { 
      id: Sequelize.INTEGER,
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      data_nasc: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

  },

  async down (queryInterface, Sequelize) {


    await queryInterface.dropTable('paciente');

  }
};
