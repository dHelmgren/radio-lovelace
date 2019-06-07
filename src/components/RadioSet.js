import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={props.tracks.slice(0, props.tracks.length / 2)}
        />
        <Playlist
          side="Evening"
          tracks={props.tracks.slice(props.tracks.length / 2, props.tracks.length)}
        />
      </section>
    </div>
  );
}


export default RadioSet;