import React, { useState, useEffect } from 'react';
import './App.css';
// FooterSection added below
import NavbarLinks from './components/NavbarLinks';
import Section from './components/Section';
import FooterSection from './components/FooterSection';
// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      {/* Top navigation bar */}
      <NavbarLinks />
      {/* New pixel-perfect Section component */}
      <Section />
      {/* Footer always at bottom of page */}
      <FooterSection />
    </div>
  );
}

export default App;
