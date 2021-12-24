import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <Router>
      <div className="App" theme="light">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
