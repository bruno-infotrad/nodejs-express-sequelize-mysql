module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    organization: {
      type: Sequelize.INTEGER
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return User;
};
