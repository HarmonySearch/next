"use strict";

const {Sequelize, DataTypes}    = require('sequelize');
const User = require('./user.js');

const DataBase = new Sequelize('staff', 'userstaff', '6Cjj6B[>2NQ^', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
const dbUser = User(DataBase, DataTypes);
//dbUser.sync({ alter: true })
// Define relationships 
//dbUser.hasManu( dbAssignment );

module.exports = {
  db: DataBase,      // экземпляр соединение БД имя db : ссылка
  user_tab : dbUser // таблица пользователей имя user_tab : ссылка
};
