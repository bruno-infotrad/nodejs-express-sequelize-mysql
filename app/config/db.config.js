module.exports = {
  HOST: "localhost",
  USER: "express",
  PASSWORD: "Passw!2345",
  DB: "teaminfo",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
