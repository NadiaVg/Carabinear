const db = require("../models");
const Restaurant = db.restaurants;
const Op = db.Sequelize.Op;

// Create and Save a new Restaurant
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.category || !req.body.direction || !req.body.codigoPostal){
    return res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Restaurant
  const restaurant = {
    name: req.body.name,
    category: req.body.category,
    direction: req.body.direction,
    codigoPostal: req.body.codigoPostal,
    filename: req.file ? req.file.filename : ""
  }

  // Save Restaurant in the database
  Restaurant.create(restaurant).then(data => {
    return res.send(data);
  }).catch(err => {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the restaurant"
    })
  });
}; 

// Retrieve all Restaurants from the database.
exports.findAll = (req, res) => {
  Restaurant.findAll().then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
      message: err.message || "Some error occurred while retrieving the restaurant"
    })
  })
};

// Find a single Restaurant with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  Restaurant.findByPk(id)
    .then(data => {
      if (data) {
        return res.send(data);
      } else {
        return res.status(404).send({
          message: `Cannot find Restaurant with id=${id}.`
        });
      }
    })
    .catch(err => {
      return res.status(500).send({
        message: "Error retrieving Restaurant with id=" + id
      });
    });
};


// UPdate

exports.update = (req, res) => {

  const id = req.params.id;
  if (!req.body.name || !req.body.category || !req.body.direction || !req.body.codigoPostal){
    return res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Restaurant
  const restaurant = {
    name: req.body.name,
    category: req.body.category,
    direction: req.body.direction,
    codigoPostal: req.body.codigoPostal,
    filename: req.file
  }

  Restaurant.update(restaurant, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        return res.send({
          message: "Restaurant was updated successfully."
        });
      } else {
        return res.send({
          message: `Cannot update Restaurant with id=${id}. Maybe Restaurant was not found!`
        });
      }
    })
    .catch(err => {
      return res.status(500).send({
        message: "Error updating Restaurant with id=" + id
      });
    });
};

// Delete

exports.delete = (req, res) => {
  const id = req.params.id;

  Restaurant.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        return res.send({
          message: "Restaurant was deleted successfully!"
        });
      } else {
        return res.send({
          message: `Cannot delete Restaurant with id=${id}. Maybe Restaurant was not found!`
        });
      }
    })
    .catch(err => {
      return res.status(500).send({
        message: "Could not delete Restaurant with id=" + id
      });
    });
};