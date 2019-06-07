import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

class Playlist extends Component {

  propTypes = {
    tracks: PropTypes.array,
    side: PropTypes.string,
    toggleFavorite: PropTypes.func,
    sendToTop: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      tracks: props.tracks
    }

  }

  calculatePlayTime = (tracks) => {
    let minutes = 0;
    let seconds = 0;
    tracks.forEach((track) => {
      const times = track.playtime.split(':');
      minutes += parseInt(times[0]);
      seconds += parseInt(times[1]);
    });

    minutes += Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;

    seconds = ("" + seconds).padStart(2, "0");
    minutes = ("" + minutes).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  toggleFavorite(index) {
    // ugh where's Redux when you need it?
    const newState = this.state;
    const playlistTracks = newState.tracks;
    const track = playlistTracks[index];

    track.favorite = !track.favorite;

    playlistTracks[index] = track;
    newState.tracks = playlistTracks;
    this.setState(newState);
  }

  sendToTop(index) {
    const newState = this.state;
    const playlistTracks = newState.tracks;

    const track = playlistTracks[index];
    playlistTracks.splice(index, 1);
    playlistTracks.unshift(track);

    newState.tracks = playlistTracks;
    this.setState(newState);
  }

  render() {
    const tracks = this.state.tracks;
    const trackCount = tracks.length;
    const playtime = this.calculatePlayTime(tracks);
    const trackElements = tracks.map((track, i) => {
      return (
        <Track
          key={i}
          {...track}
          toggleFavorite={() => this.toggleFavorite(i)}
          sendToTop={() => this.sendToTop(i)}
        />
      );
    });

    return (
      <div className="playlist">
        <h2>{this.props.side} Playlist</h2>
        <p>
          {trackCount} tracks - {playtime}
        </p>
        <ul className="playlist--track-list">
          {trackElements}
        </ul>
      </div>
    );
  }
}

export default Playlist;
