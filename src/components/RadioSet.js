import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {
  render() {
    return (
      <div className="radio-set">
        <h1>Radio Set</h1>
        <section className="radio-set--playlist-container">
          <Playlist side="Morning" />
          <Playlist side="Evening" />
        </section>
      </div>
    );
  }
}

export default RadioSet;