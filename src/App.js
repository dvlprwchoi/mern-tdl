import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageRoutes from './components/PageRoutes/PageRoutes';

export const CredentialsContext = React.createContext();

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
console.log(BACKEND_URL);

function App() {
  const credentialsState = useState(null);

  return (
    <CredentialsContext.Provider value={credentialsState}>
      <Router>
        <div className="App" theme="light">
          <Header />
          <PageRoutes />
          <Footer />
        </div>
      </Router>
    </CredentialsContext.Provider>
  );
}

export default App;
