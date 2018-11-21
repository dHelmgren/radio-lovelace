import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RadioSet from './components/RadioSet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Lovelace Radio</h1>
        </header>
        <main className="main">
          <RadioSet />
        </main>
      </div>
    );
  }
}

export default App;
