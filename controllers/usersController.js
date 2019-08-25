const db = require("../models");
module.exports = {
  //db.healthappdb.insert({name,age,weight,height,etc}) inserting a user document into the user collection
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
