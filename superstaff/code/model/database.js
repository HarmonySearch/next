"use strict";

const {Sequelize, DataTypes}    = require('sequelize');
const User = require('./user.js');

const DataBase = new Sequelize('staff', 'userstaff', '6Cjj6B[>2NQ^', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
const dbUser = User(DataBase, DataTypes);
// Define relationships 
//dbUser.hasManu( dbAssignment );

module.exports = {
    user : dbUser,
};
