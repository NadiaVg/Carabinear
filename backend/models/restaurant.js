'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    codigoPostal: DataTypes.INTEGER,
    name: DataTypes.STRING,
    direction: DataTypes.STRING,
    category: DataTypes.STRING,
    filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurant',
  });

  Restaurant.associate = function (models) {
    Restaurant.belongsToMany(models.User, {
      through: 'Valorations',
      as: 'users',
      foreignKey: 'RestaurantId'
    })
  }

  return Restaurant;
};