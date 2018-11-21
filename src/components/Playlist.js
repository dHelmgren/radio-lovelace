import React from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

class Playlist extends React.Component {
  calculatePlayTime() {
    let minutes = 0;
    let seconds = 0;
    this.props.tracks.forEach((track) => {
      const times = track.playtime.split(':');
      minutes += parseInt(times[0]);
      seconds += parseInt(times[1]);
    });

    console.log(minutes);
    console.log(seconds);

    minutes += Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;

    seconds = ("" + seconds).padStart(2, "0");
    minutes = ("" + minutes).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    const tracks = this.props.tracks;
    const trackCount = tracks.length;
    const playtime = this.calculatePlayTime();
    const trackElements = tracks.map((track, i) => {
      return <Track key={i} {...track} />
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
