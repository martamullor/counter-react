import React, { Component } from 'react';
import Chrono from './components/Chrono.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Counter</h1>
        <Chrono />
      </div>
    );
  }
}

export default App;
