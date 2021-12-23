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
      <div className="welcome-buttons">
        <button className="login-button">Log In</button>
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
