import React, { Component } from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {
  constructor(props) {
    super();

    this.state = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    }

  }

  render() {
    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.morningTracks}
          />
          <Playlist
            side="Evening"
            tracks={this.state.eveningTracks}
          />
        </section>
      </div>
    );
  }
}

export default RadioSet;