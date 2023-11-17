// App.js

import React from 'react';
import Dashboard from './Dashboard';
import Search from './Search';
import '../styles/App.css';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <h1>Candies Beauty Shop </h1>
        <Search />
      </div>
      <div className='content'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
