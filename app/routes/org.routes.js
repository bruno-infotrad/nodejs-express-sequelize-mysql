const { authJwt } = require("../middleware");
module.exports = app => {
  const orgs = require("../controllers/org.controller.js");

  var router = require("express").Router();

  // Create a new Org
  router.post("/",[authJwt.verifyToken, authJwt.isAdmin],orgs.create);

  // Retrieve all Orgs
  router.get("/", orgs.findAll);

  // Retrieve a single Org with id
  router.get("/:id", orgs.findOne);

  // Update a Org with id
  router.put("/:id",[authJwt.verifyToken, authJwt.isAdmin],orgs.update);

  // Delete a Org with id
  router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin],orgs.delete);

  // Delete all Orgs
  router.delete("/",[authJwt.verifyToken, authJwt.isAdmin],orgs.deleteAll);

  app.use('/api/orgs', router);
};
