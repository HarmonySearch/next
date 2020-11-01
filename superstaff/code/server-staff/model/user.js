"use strict";

module.exports = function (DataBase, DataTypes) {

  const User = DataBase.define(
    'user', {
    e_mail: {
      type: DataTypes.STRING(32),
      comment: 'e-mail'
    },
    e_mail_code: {
      type: DataTypes.STRING(32),
      comment: 'код на e-mail'
    },
    e_mail_true: {
      type: DataTypes.BOOLEAN,
      comment: 'истинный e-mail'
    },
    last_name: {
      type: DataTypes.STRING(32),
      comment: 'фамилия'
    },
    middle_name: {
      type: DataTypes.STRING(32),
      comment: 'отчество'
    },
    first_name: {
      type: DataTypes.STRING(32),
      comment: 'имя'
    },
    password: {
      type: DataTypes.STRING(60),
      comment: 'хэш пароля'
    },
    access: {
      type: DataTypes.INTEGER,
      comment: 'уровень доступа'
    },
    ban: {
      type: DataTypes.BOOLEAN,
      comment: 'бан'
    },
    del: {
      type: DataTypes.BOOLEAN,
      comment: 'пользователь удалён'
    }
  })

  return User;
};