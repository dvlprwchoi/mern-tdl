import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CredentialsContext } from '../../App';
import './Login.css';

import { _error } from '../Signup/Signup';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [credentials, setCredentials] = useContext(CredentialsContext);

  const _login = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(_error)
      .then(() => {
        setCredentials({ username, password });
        navigate('/dashboard');
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="main">
      <div className="login">
        <div className="login-message">
          <h2>Log In Page</h2>
          {!!error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
        <div className="login-information">
          <form className="login-information-form" onSubmit={_login}>
            <div className="login-username-div">
              <label className="login-username-input-label" htmlFor="username">
                Username:
              </label>
              <input
                className="login-username-input-box"
                type="text"
                placeholder="Type Username"
                name="username"
                id="username"
                autoFocus
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="login-password-div">
              <label className="login-password-input-label" htmlFor="password">
                Password:
              </label>
              <input
                className="login-password-input-box"
                type="password"
                placeholder="Type Password"
                name="password"
                id="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="login-button-div buttons-div">
              <button className="login-button-2 button">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
