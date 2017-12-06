import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
       <HomePage/>
      </div>
    );
  }
}

export default App;
