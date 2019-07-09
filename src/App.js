import React, { Component } from "react";
import Player from "./components/player";
import EpisodeList from "./components/episodeList";
import "./App.css";

class App extends Component {
  state = {
    selectedEpisode: null,
    episodeArtwork: null
  };
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <h1 className="music-header--title">Podcast Time</h1>
        <h4 className="music-header--tagline">
          Episodes from 'Goodnight Stories For Rebel Girls'
        </h4>
        <Player selectedEpisode={this.state.selectedEpisode} />
        <EpisodeList titleClick={this.titleClick} />
      </div>
    );
  }

  titleClick = episode => {
    this.setState({
      selectedEpisode: episode.episode_id,
      episodeArtwork: episode.image_original_url
    });
  };
}

export default App;
