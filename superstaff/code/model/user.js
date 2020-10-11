/*
Передаем в функцию  
*/
module.exports = function (sequelize, DataTypes) {

  return sequelize.define(
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
      type: DataTypes.STRING(32),
      allowNull: false,
      type: DataTypes.BOOLEAN,
      comment: 'удаление пользователя'
    }
  })
};