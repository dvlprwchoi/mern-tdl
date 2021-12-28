import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

import { CredentialsContext } from '../../App';
import { useContext } from 'react';

function Dashboard() {
  const [credentials] = useContext(CredentialsContext);

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const _addTodo = (e) => {
    e.preventDefault();
    if (!todoInput) return;
    const newTodo = { completed: false, text: todoInput };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoInput('');
    postTodos(newTodos);
  };

  const toggleCheckbox = (index) => {
    const newCheckboxTodos = [...todos];
    newCheckboxTodos[index].completed = !newCheckboxTodos[index].completed;
    setTodos(newCheckboxTodos);
  };

  const postTodos = (newTodos) => {
    fetch(`http://localhost:4000/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentials.username}:${credentials.password}`,
      },
      body: JSON.stringify(newTodos),
    }).then(() => {});
  };

  return (
    <div className="main">
      <div className="dashboard">
        <div className="dashboard-message">
          <h2>Good morning, {credentials.username}</h2>
          <p>You can add, edit, delete, clear</p>
        </div>
        <div className="todo-list-container">
          <div className="todo-list-board">
            {todos.map((todo, index) => (
              <div className="single-todo" key={index}>
                <input type="checkbox" onClick={() => toggleCheckbox(index)} />
                <label>{todo.text}</label>
              </div>
            ))}
            {/* <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li>j
            <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li>
            <li>CCC</li> */}
          </div>
          <div className="add-todo-list-div">
            <form className="add-todo-list-form" onSubmit={_addTodo}>
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
                onChange={(e) => setTodoInput(e.target.value)}
                value={todoInput}
              />
              <button className="add-button button-small" type="submit">
                Add
              </button>
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
