import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';


  // constructor(props) {
  //   super();

  //   this.state = {
  //     morningTracks: props.tracks.slice(0, props.tracks.length / 2),
  //     eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
  //   }

  // }

  // switchLists(index, fromPlaylist, toPlaylist) {
  //   const newState = {...this.state};
    
  //   const fromPlaylistTracks = [...newState[fromPlaylist]];
  //   const track = fromPlaylistTracks[index];
  //   fromPlaylistTracks.splice(index, 1);

  //   const toPlaylistTracks = [...newState[toPlaylist]];
  //   toPlaylistTracks.unshift(track);

  //   newState[fromPlaylist] = fromPlaylistTracks;
  //   newState[toPlaylist] = toPlaylistTracks;
  //   this.setState(newState);
  // }
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