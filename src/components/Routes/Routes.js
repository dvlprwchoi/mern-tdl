import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Logout from '../Logout/Logout';

function Routes({ username }) {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard">
          <Dashboard username={username} />
        </Route>
        <Route exact path="/logout">
          <Logout username={username} />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
