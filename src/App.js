import React, { Component } from "react";
import Player from "./components/Player";
import EpisodeList from "./components/EpisodeList";
import "./App.css";
import Controls from "./components/Controls";
import * as api from "./api";

class App extends Component {
  state = {
    episodes: [],
    playing: false,
    currentTrackIndex: 0,
    selectedEpisode: null,
    episodeArtwork: null
  };
  render() {
    if (this.state.error) return console.log("error");
    return (
      <div className="App">
        <header className="App-header" />
        <h1 className="music-header--title">Podcast Time</h1>
        <h4 className="music-header--tagline">
          Episodes from 'Goodnight Stories For Rebel Girls'
        </h4>
        <Player
          selectedEpisode={this.state.selectedEpisode}
          artwork={this.state.episodeArtwork}
        />
        <EpisodeList
          titleClick={this.titleClick}
          episodes={this.state.episodes}
        />
        <Controls onClick={this.handleClick} playing={this.state.playing} />
        {/* audio element for the audio web api */}
        <audio
          ref={audio => {
            this.audioElement = audio;
          }}
          src={`https://api.spreaker.com/v2/episodes/${
            this.state.selectedEpisode
          }/play`}
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchEpisodes(10382357);
  }

  //any errors send console log, otherwise set episodes into state and select first one.
  fetchEpisodes = userId => {
    api.fetchEpisodes(userId).then(res => {
      if (res.type === "error") {
        this.setState({
          error: res
        });
      } else {
        this.setState({
          episodes: res.response.items,
          selectedEpisode: res.response.items[0].episode_id,
          episodeArtwork: res.response.items[0].image_original_url
        });
      }
    });
  };

  titleClick = (episode, index) => {
    console.log(index);
    this.setState({
      selectedEpisode: episode.episode_id,
      episodeArtwork: episode.image_original_url,
      currentTrackIndex: index
    });
  };

  handleClick = e => {
    switch (e.target.id) {
      case "play":
        this.setState((state, props) => {
          let currentTrackIndex = state.currentTrackIndex;
          if (currentTrackIndex === 0) {
            currentTrackIndex = 1;
          }
          return {
            playing: true,
            currentTrackIndex: currentTrackIndex
          };
        }, this.playAudio);
        break;
      case "pause":
        this.setState({ playing: false }, this.pauseAudio);
        break;
      default:
    }
  };

  playAudio() {
    this.audioElement.load();
    this.audioElement.play();
  }

  pauseAudio() {
    this.audioElement.pause();
  }
}

export default App;
