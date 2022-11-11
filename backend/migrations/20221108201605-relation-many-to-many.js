'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return [
      queryInterface.addConstraint('Valorations', {
        type: 'FOREIGN KEY',
        name: 'FK_Valoration_User',
        fields: ['UserId'],
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }),
      queryInterface.addConstraint('Valorations', {
        type: 'FOREIGN KEY',
        name: 'FK_Valoration_Restaurant',
        fields: ['RestaurantId'],
        references: {
          table: 'Restaurants',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      })
    ]
  },

  async down (queryInterface, Sequelize) {
    return [
      queryInterface.removeConstraint('Valorations', 'FK_Valoration_User'),
      queryInterface.removeConstraint('Valorations', 'FK_Valoration_Restaurant')
    ]
  }
};
