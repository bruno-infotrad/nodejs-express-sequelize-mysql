const { authJwt } = require("../middleware");
module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/",[authJwt.verifyToken, authJwt.isAdmin],users.create);

  // Retrieve all Users
  router.get("/", users.findAll);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Update a User with id
  router.put("/:id",[authJwt.verifyToken, authJwt.isOwnerOrAdmin],users.update);
  router.post("/thumbnail-upload/:id",[authJwt.verifyToken, authJwt.isOwnerOrAdmin],users.upload);

  // Delete a User with id
  router.delete("/:id",[authJwt.verifyToken, authJwt.isAdmin],users.delete);

  // Delete all Users
  router.delete("/",[authJwt.verifyToken, authJwt.isAdmin],users.deleteAll);

  app.use('/api/users', router);
};
