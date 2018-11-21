import React from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

class Playlist extends React.Component {
  render () {
    return (
      <div className="playlist">
        <h2>{this.props.side} Playlist</h2>
        <ul className="playlist--track-list">
          <li>Tracks?</li>
        </ul>
      </div>
    );
  }
}

export default Playlist;
