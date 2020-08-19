import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li className='todos' >Go to market</li>
          <li className='todos' >Buy food</li>
          <li className='todos' >Make dinner</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
