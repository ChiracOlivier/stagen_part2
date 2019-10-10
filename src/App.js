import React from 'react';
import logo from './logo.svg';
import './App.css';
import video1 from './video1.mp4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>Salut</span>
      </header>
      <video autoPlay loop id="myVideo">
        <source src={video1} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
