'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Valorations', [
      {
        UserId: 1,
        RestaurantId: 1,
        puntuation:3,
        happy:0,
        sad: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Valorations', null, {});
  }
};
