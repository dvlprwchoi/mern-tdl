import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="main">
      <div className="dashboard">
        <div className="dashboard-message">
          <h2>Good morning, "Stranger!"</h2>
          <p>You can add, edit, delete, clear</p>
        </div>
        <div className="dashboard-buttons-div buttons-div">
          <Link to="/logout">
            <button className="logout-button button">Log Out</button>
          </Link>
          <button className="add-button button">Add</button>
          <button className="edit-button button">Edit</button>
          <button className="delete-button button">Delete</button>
          <button className="clear-button button">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
