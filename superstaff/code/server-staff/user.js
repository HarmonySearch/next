const {Sequelize, DataTypes} = require('sequelize');

const db = new Sequelize('staff', 'userstaff', '6Cjj6B[>2NQ^', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const User = sequelize.define(
  'User', {
  last_name: {
    type: DataTypes.STRING(32),
    allowNull: false,
    comment: 'фамилия'
  },
  middle_name: {
    type: DataTypes.STRING(32),
    allowNull: false,
    comment: 'отчество'
  },
  first_name: {
    type: DataTypes.STRING(32),
    allowNull: false,
    comment: 'имя'
  },
  password: {
    type: DataTypes.STRING(32),
    allowNull: false,
    comment: 'пароль'
  },
  access: {
    type: DataTypes.INTEGER,
    allowNull: false,
    DefaultValue: 0,
    comment: 'уровень доступа'
  },
  ban: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'имя'
  },
  del: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: 'удаление пользователя'
  }
})
