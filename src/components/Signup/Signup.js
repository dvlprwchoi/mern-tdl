import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CredentialsContext } from '../../App';
import './Signup.css';

export const _error = async (response) => {
  if (!response.ok) {
    // console.log(response);
    const { message } = await response.json();
    console.log('Error Message: ', message);
    throw Error(message);
  }
  return response.json();
};

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [credentials, setCredentials] = useContext(CredentialsContext);

  const _create = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/create`, {
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
      <div className="signup">
        <div className="signup-message">
          <h2>Sign Up Page</h2>
          {!!error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
        <div className="create-user">
          <form className="create-user-form" onSubmit={_create}>
            <div className="create-username-div">
              <label className="username-input-label" htmlFor="username">
                Username:
              </label>
              <input
                className="username-input-box"
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
            <div className="create-password-div">
              <label className="password-input-label" htmlFor="password">
                Password:
              </label>
              <input
                className="password-input-box"
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
            <div className="create-button-div buttons-div">
              <button className="create-button button" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
