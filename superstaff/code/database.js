"use strict";
const user = require('./user.js');
const sequelize = require('sequelize');
//console.log(sequelize);
const dbUser = user( sequelize);

/** Define relationships */
//dbUser.hasManu( dbAssignment );

//module.exports = {
//    user : dbUser,
//};