import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Logout from '../Logout/Logout';

function Routes() {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default Routes;
