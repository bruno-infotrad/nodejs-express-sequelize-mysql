module.exports = (sequelize, Sequelize) => {
  const Org = sequelize.define("org", {
    orgid: {
      type: Sequelize.STRING
    },
    orgname: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
  });

  return Org;
};
