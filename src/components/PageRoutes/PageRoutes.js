import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Logout from '../Logout/Logout';

function PageRoutes() {
  return (
    <div className="routes">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default PageRoutes;
