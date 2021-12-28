import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageRoutes from './components/PageRoutes/PageRoutes';

function App() {
  return (
    <Router>
      <div className="App" theme="light">
        <Header />
        <PageRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
