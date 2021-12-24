import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <div className="App" theme="light">
        <Header />
        <Switch>
          <Route exact path="/">
            {/* <Header /> */}
            <Main />
            {/* <Footer /> */}
          </Route>
          <Route exact path="/signup">
            {/* <Header /> */}
            <Signup />
            {/* <Footer /> */}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
