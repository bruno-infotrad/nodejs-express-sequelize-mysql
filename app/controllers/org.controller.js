const db = require("../models");
const Org = db.orgs;
const Op = db.Sequelize.Op;

// Create and Save a new Org
exports.create = (req, res) => {
  // Validate request
  if (!req.body.orgid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Org
  const org = {
    orgid: req.body.orgid,
    orgname: req.body.orgname,
    description: req.body.description,
  };

  // Save Org in the database
  Org.create(org)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Org."
      });
    });
};

// Retrieve all Orgs from the database.
exports.findAll = (req, res) => {
  const orgname = req.query.orgname;
  var condition = orgname ? { orgname: { [Op.like]: `%${orgname}%` } } : null;

  Org.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orgs."
      });
    });
};

// Find a single Org with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Org.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Org with id=" + id
      });
    });
};

// Update a Org by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Org.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Org was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Org with id=${id}. Maybe Org was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Org with id=" + id
      });
    });
};

// Delete a Org with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Org.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Org was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Org with id=${id}. Maybe Org was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Org with id=" + id
      });
    });
};

// Delete all Orgs from the database.
exports.deleteAll = (req, res) => {
  Org.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Orgs were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orgs."
      });
    });
};
