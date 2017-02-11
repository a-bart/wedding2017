var User = require('../models/users.js');

var users = {};

users.list = function (req, res) {
  console.log('calling user:get');
  User.find(function(err, users) {
    console.log('called: ', users);
    res.send(users);
  });
}

users.post = function (req, res) {
  console.log(req.body);
  new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin
  }).save();
  res.send('OK');
}

module.exports = users;