import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloStateless from './components/hello-stateless'; //nie trzeba rozszerzenia pikow js
import HelloStatefull from './components/hello-statefull';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloStateless name='Majka' />
        <HelloStatefull name='Majka' />
      </div>

    );
  }
}

export default App;
