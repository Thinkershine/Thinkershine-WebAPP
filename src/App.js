import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from "bootstrap/dist/js/bootstrap"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="container">
          </div>
          <p>
            Again Starting All Over...
            Why the collapse?
          </p>
        </header>
      </div>
    );
  }
}

export default App;
