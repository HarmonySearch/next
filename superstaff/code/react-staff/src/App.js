import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import axios from "./utils/API";
/*
 * 
*/ 
function LoginForm() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      const res = await axios.post('/newaccount', { email: email, password: password });
      console.log(email);
      setPassword(res.data.re);
    } catch (error) {
      console.log('==================',error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor='email'>Email</label>
        <input type='email' className="form-control" id='email' aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor='password'>Password</label>
        <input type='text' className="form-control" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" className="btn btn-primary btn-sm" value="ОТПРАВИТЬ" />
    </form>
  );
}

export { LoginForm };


/* function Button(props) {

  function handleClick(e) {
    e.preventDefault();
    console.log('По ссылке кликнули.');
    props.setVisible(false);
  }

  return (
    <button type="submit" className="btn btn-primary btn-sm" onClick={handleClick}>{props.label}</button>
  );
} */

function Element(props) {
//  const [Visible, setVisible] = React.useState(true)
  return (
    <div className="parent">
      <LoginForm />
    </div>
  );
};
export { Element };
