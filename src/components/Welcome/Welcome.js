import { Link } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-message">
        <h2>Welcome to MERN Todo List application!</h2>
        <p>
          You can Log In or Sign Up for an acount to use MERN Todo List app.
        </p>
      </div>
      <div className="welcome-buttons-div buttons-div">
        <Link to="/login">
          <button className="login-button button">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="signup-button button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
