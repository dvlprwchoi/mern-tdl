import { useState } from 'react/cjs/react.development';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    });
  };

  return (
    <div className="main">
      <div className="signup">
        <div className="signup-message">
          <h2>Sign Up Page</h2>
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
