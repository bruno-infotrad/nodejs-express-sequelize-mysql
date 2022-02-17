exports.allAccess = (req, res) => {
  res.status(200).send("Welcome to New TeamInfo <br><a href='/login'>Log in</a> to search and view users profiles<br>&nbsp;<br>Bienvenue sur le nouveau site de mon&Eacute;quipe<br><a href='/login'>Connectez-vous</a> pour effectuer des recherches et voir les profils des utilisateurs");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
