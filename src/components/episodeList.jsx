import * as api from "../api";

import React, { Component } from "react";

class episodeList extends Component {
  state = {
    episodes: [],
    error: null
  };

  //trying to return a list of all titles of podcasts
  render(props) {
    if (this.state.error) return console.log("error");
    return (
      <div>
        {this.state.episodes.map((episode, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                this.props.titleClick(episode);
              }}
            >
              {episode.title}
            </li>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchEpisodes(10382357);
  }

  fetchEpisodes = userId => {
    api.fetchEpisodes(userId).then(res => {
      if (res.type === "error") {
        this.setState({
          error: res
        });
      } else {
        this.setState({
          episodes: res.response.items
        });
      }
    });
  };
}

export default episodeList;
