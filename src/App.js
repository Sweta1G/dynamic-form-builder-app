import React, { useState, useEffect } from 'react';
import FormBuilder from './components/FormBuilder';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  
  return (
    <div className="container">
      <h1>Dynamic Form Builder</h1>
      <button className="toggle-button" onClick={toggleDarkMode}>
        <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </button>
      <FormBuilder />
    </div>
  );
};

export default App;