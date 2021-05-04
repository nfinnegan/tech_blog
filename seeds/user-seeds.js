const { User } = require("../models");

const userData = [
  {
    username: "natalie",
    password: "password",
  },
  {
    username: "ashley",
    password: "password1",
  },
  {
    username: "jaden",
    password: "password2",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
