import * as api from "../api";

import React, { Component } from "react";

class episodeList extends Component {
  //trying to return a list of all titles of podcasts
  render(props) {
    return (
      <div>
        {this.props.episodes.map((episode, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                this.props.titleClick(episode, index);
              }}
            >
              {episode.title}
            </li>
          );
        })}
      </div>
    );
  }
}

export default episodeList;
