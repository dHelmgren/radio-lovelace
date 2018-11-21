import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import songData from './data/tracks.json';

import RadioSet from './components/RadioSet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} />
        </main>
      </div>
    );
  }
}

export default App;
