const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var multer = require('multer');
//const fileUpload = require('express-fileupload');


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// File upload functionality
app.use(multer().single("thumbnail"));
//app.use(fileUpload());

const path = __dirname + '/app/views/';

app.use(express.static(path));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// drop the table if it already exists
//db.sequelize.sync({ force: true }).then(() => {
//  console.log("Drop and re-sync db.");
//  initial();
//});

app.get(['/','/addorg','/adduser','/login','/logout','/orgs','/profile','/register','/users'], function (req,res) {
  res.sendFile(path + "index.html");
});
// simple route
//app.get("/", (req, res) => {
  //res.json({ message: "Welcome to New TeamInfo backend" });
//});

require("./app/routes/user.routes")(app);
require("./app/routes/org.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/appuser.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
