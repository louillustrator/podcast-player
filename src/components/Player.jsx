import React, { Component } from "react";
// import * as api from "../api";
import "./Player.css";
import ReactPlayer from "react-player";

class player extends Component {
  render(props) {
    return (
      <div className="player-image-wrapper">
        <figure>
          <img
            className="episode-artwork"
            src={`${this.props.artwork}`}
            alt="episode artwork"
          />
        </figure>
      </div>
    );
  }

  // PlayClicked = () => {
  //   api.playEpisode(this.props.selectedEpisode);
  // };
}

//testing, it's behaviour, so eg, skip would test if the next thing plays. not something in state.

export default player;
