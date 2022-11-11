'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: 'Mister Ribs',
        direction: 'Centro Comercial Las Ramblas, Las Palmas de Gran Canaria, Las Palmas',
        codigoPostal: 35019,
        category: 'Americana',
        filename: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Restaurants', null, {})
  }
};
