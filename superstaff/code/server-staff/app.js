/* 

*/
const parseurl = require('parseurl') // для примера
const express = require('express')
const app = express()

const cors = require('cors') // разрешение перекрестных ссылок
const bcrypt = require('bcrypt') // хеширование паролей
const session = require('express-session') // сессии
const redis = require('redis') // БД redis
// ---- БД для сессий ------------------------
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()
// ---- БД ------------------------
const { Sequelize, DataTypes } = require('sequelize');
const { db, user_tab } = require('./model/database'); // ссылка на базу данных и таблицы

app.set('port', process.env.PORT || 8080);

/**
 * Весь этот код запускается при каждом запросе. т.е. как только експресс отправляет ответ
 * клиенту, то всё что находится в 
 */

app.use(cors()); 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

/* логин ==============
app.post('/signin', function (request, response) {
должны прилететь почта и пароль. проверка если нет в базе почты или пароль не соответствует то загрузка страницы регистрации
если не подтверждения - то повторная высылка кода на почту с ообщение что вам выслано подтвердить до 24-00
регистрация =====
app.post('/newaccount', function (request, response) {
должны прилететь почта и пароль. генерирем хэш и пишем в базу данных пишем активацию неоконченную. отсылаем на почту ссылку на ...
если почта уже имеется - отлуп
подтверждение почтового ящика (активация пользователя) ============
app.post('/activation', function (request, response) {
принимаем ссылку get с оринигальум кодом ищем в БД. если нашли то там устанавливаем флаг подтверждения почты
читска ======
в 0-00 все неподтвержденные почты удаляются.
// signout выход

        //  ---- УДАЛЕНИЕ СТРОКИ ----



*/

app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname
  //console.log(pathname);
  //console.log(req.session.id);
  console.log(req.sessionID);
  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})

app.get('/foo', function (req, res, next) {

  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})

// 
/* ---- СОЗДАНИЕ АККАУНТА -----------------------------------------------------
Исходные данные: почта и пароль. Почта должна быть оригинальной. Создаем хеш и
записывем в базу данных. Помечаем создаем оригинальный код пользователя. Записываем
в таблицу. Отмечаем в таблице, что почта не подтверждена. Посылаем на почту строку
192
*/
app.post('/newaccount', function (request, response) {

  const { email, password } = request.body;

  //  ---- ХЭШ (60 символов) ----
  let Hash;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      Hash = hash;
      console.log(hash);
    });

  const CreateUser = async () => {
    // асинхронная функция записи пользователя в БД

    try {
      const result = await db.transaction(async (t) => {

        const user = await user_tab.create({
          e_mail: data.email,
          last_name: '',
          middle_name: '',
          first_name: '',
          password: data.password,
          access: 1,
          ban: false,
          del: false
        }, { transaction: t });

        return user;

      });
      // интересно что возвращает .create(
      console.log(result);

    } catch (error) {

      console.log('------------------');
      console.log(error);
      console.log('===============');

    }
  }
  //CreateUser();
  response.send({ "re": "Климов" });

});

// ----------------------------------------------------------------------------
app.get('/read', function (req, res) {
  user_tab.findAll({ raw: true })
    .then(result => {
      //console.log(result);
      result.forEach((resultSetItem) => {
        console.log(resultSetItem.last_name);
      });
      res.json({ "last_name": "Климов" });
    })
    .catch(error => {
      console.log(error);
    });
});

// ----------------------------------------------------------------------------
// тестирование базы данных MySQL
app.get('/mysql', function (req, res) {
  const sequelize = new Sequelize('staff', 'userstaff', '6Cjj6B[>2NQ^', {
    host: 'localhost',
    dialect: 'mysql'
  });

  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  console.log('начало');
  res.type('text/plain');
  res.send('MySQL');
});

// ----------------------------------------------------------------------------
// пользовательская страница 404
app.use(function (req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 — Не найдено');
});

// ----------------------------------------------------------------------------
// пользовательская страница 500
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 — Ошибка сервера');
});

// ----------------------------------------------------------------------------
app.listen(app.get('port'), function () {

  console.log('Express запущен на http://localhost:' +
    app.get('port') + '; нажмите Ctrl+C для завершения.');
});