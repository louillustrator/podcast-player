import React, { Component } from "react";
// import * as api from "../api";
import ReactPlayer from "react-player";

class player extends Component {
  render(props) {
    console.log(this.props.selectedEpisode);
    return (
      <ReactPlayer
        url={`https://api.spreaker.com/v2/episodes/${
          this.props.selectedEpisode
        }/play`}
        config={{
          file: {
            forceAudio: true
          }
        }}
        width="100%"
        height="30px"
        controls={true}
        playing={true}
      />
    );
  }

  // PlayClicked = () => {
  //   api.playEpisode(this.props.selectedEpisode);
  // };
}

//testing, it's behaviour, so eg, skip would test if the next thing plays. not something in state.

export default player;
