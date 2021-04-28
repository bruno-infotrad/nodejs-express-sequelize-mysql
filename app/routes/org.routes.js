module.exports = app => {
  const orgs = require("../controllers/org.controller.js");

  var router = require("express").Router();

  // Create a new Org
  router.post("/", orgs.create);

  // Retrieve all Orgs
  router.get("/", orgs.findAll);

  // Retrieve a single Org with id
  router.get("/:id", orgs.findOne);

  // Update a Org with id
  router.put("/:id", orgs.update);

  // Delete a Org with id
  router.delete("/:id", orgs.delete);

  // Delete all Orgs
  router.delete("/", orgs.deleteAll);

  app.use('/api/orgs', router);
};
