import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

const Track = ({title, artist, playtime, albumart, favorite}) => {
  return (
    <li className="track">
      <img className="track--albumart" alt={`album art for ${title}`} src={albumart} />
      <h3 className="track--title">{title}</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={!favorite}
      />
      <p className="track--artist">{artist}</p>
      <p className="track--playtime">{playtime}</p>
      <button className="track--control track--to-top">🔝</button>
      <button className="track--control track--switch">↔️</button>
    </li>
  );
}

export default Track;
