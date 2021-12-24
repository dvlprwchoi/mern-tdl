import './Signup.css';

function Signup() {
  return (
    <div className="main">
      <div className="signup">
        <div className="signup-message">
          <h2>Sign Up Page</h2>
        </div>
        <div className="create-user">
          <form className="create-user-form">
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
              />
            </div>
            <div className="create-button-div buttons-div">
              <button className="create-button button">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
