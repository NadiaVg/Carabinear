module.exports = (sequelize, Sequelize) => {
  const Restaurant = sequelize.define("restaurant", {
    name: {
      type: Sequelize.STRING
    },
    direction: {
      type: Sequelize.STRING
    },
    CP: {
      type: Sequelize.INTEGER
    },
    category: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Restaurant;
}