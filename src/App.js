import React from 'react';
import './App.css';
import TopNav from './components/top-nav/TopNav';
import LandingPage from './pages/landing-page/landingPage';

function App() {
  return (
    <div className="App">
      <TopNav />
      <LandingPage />
    </div>
  );
}

export default App;
