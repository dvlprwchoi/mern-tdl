import { Link } from 'react-router-dom';
import './Logout.css';

function Logout() {
  return (
    <div className="main">
      <div className="logout">
        <div className="logout-message">
          <h2>Logout Page</h2>
          <p>Hope to see you soon!</p>
          <p>
            It will automatically redirect to the main page. Otherwise, you can
            click one of buttons below!
          </p>
        </div>
        <div className="logout-buttons-div">
          <Link to="/">
            <button className="home-button button">Home</button>
          </Link>
          <Link to="/login">
            <button className="login-button button">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;
