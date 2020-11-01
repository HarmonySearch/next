import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import axios from "./utils/API";

function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/newaccount', { email: email, password: password });
      setPassword(res.data.re);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" value="Отправить" />
    </form>
  );
}

export { LoginForm };


function Button(props) {

  function handleClick(e) {
    e.preventDefault();
    console.log('По ссылке кликнули.');
    props.setVisible(false);
  }

  return (
    <button type="submit" className="btn btn-primary btn-sm" onClick={handleClick}>{props.label}</button>
  );
}

function Element(props) {
  const [Visible, setVisible] = React.useState(true);
  return (
    <div className="div">содержимое 1
      <div className="div1" >содержимое 2</div>
      {Visible && <div className="div1" >содержимое 3</div>}
      <Button label="КНОПКА" setVisible={setVisible} />
      <LoginForm  />
    </div>
  );
};
export { Element };
