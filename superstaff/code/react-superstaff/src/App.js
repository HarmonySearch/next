import React from 'react';
import './App.css';
import axios from "axios";

const Axios = axios.create({
  baseURL: "http://192.168.2.202:8080",
  headers: {
    "Content-type": "application/json"  // responseType: "json"
  }
});

function Login(email, password) {
  console.log(email, password);
  Axios.post('/newaccount', {  // axios.post(url[, data[, config]])
    email: email,
    password: password
  })
    .then(function (response) {
      // обработка удачи
      console.log(response.data);
      //console.log(response);
    })
    .catch(function (error) {
      // обработка ошибки
      console.log(error);
    })
}



function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" value="Отправить" />
    </form>
  );
}

export { LoginForm };
