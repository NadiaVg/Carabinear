'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Nadia',
        email: 'madeinadia138@gmail.com',
        password: 2222,
        codigoPostal: 35013,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
