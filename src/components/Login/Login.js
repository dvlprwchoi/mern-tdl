import './Login.css';

function Login() {
  return (
    <div className="main">
      <div className="login">
        <div className="login-message">
          <h2>Log In Page</h2>
        </div>
        <div className="login-information">
          <form className="login-information-form">
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
              />
            </div>
            <div className="login-button-div">
              <button className="login-button-2">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
