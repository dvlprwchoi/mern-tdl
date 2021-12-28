import { Link } from 'react-router-dom';
import './Dashboard.css';

import { CredentialsContext } from '../../App';
import { useContext } from 'react';

function Dashboard() {
  const [credentials] = useContext(CredentialsContext);

  return (
    <div className="main">
      <div className="dashboard">
        <div className="dashboard-message">
          <h2>Good morning, {credentials.username}</h2>
          <p>You can add, edit, delete, clear</p>
        </div>
        <div className="todo-list-container">
          <div className="todo-list-board">
            <li>AAA</li>
            <li>BBB</li>
            <li>CCC</li>
            <li>CCC</li>
            {/* <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li> */}
          </div>
          <div className="add-todo-list-div">
            <form className="add-todo-list-form">
              <label className="add-todo-list-input-label" htmlFor="todo">
                Todo:
              </label>
              <input
                className="add-todo-list-input-box"
                type="text"
                placeholder="Type Todo"
                name="todo"
                id="todo"
                autoFocus
                required
              />
              <button className="add-button button-small">Add</button>
            </form>
          </div>
        </div>
        <div className="dashboard-buttons-div buttons-div">
          {/* <button className="edit-button button">Edit</button> */}
          {/* <button className="delete-button button">Delete</button> */}
          <button className="clear-button button">
            Clear Completed Todo(s)
          </button>
          <Link to="/logout">
            <button className="logout-button button">Log Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
