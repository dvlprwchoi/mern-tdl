import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <Link to="/">
          <img
            className="header-app-logo"
            src="./app-logo.png"
            alt="App Logo"
          />
        </Link>
        <h1 className="header-title-text-mern">MERN</h1>
        <h1 className="header-title-text-tdl">Todo List</h1>
      </div>
    </div>
  );
}

export default Header;
