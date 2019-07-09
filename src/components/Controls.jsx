import React, { Component } from "react";

class Controls extends Component {
  render(props) {
    return (
      <div>
        <button id="previous" onClick={this.props.onClick}>
          previos
        </button>
        {!this.props.playing && (
          <button id="play" onClick={this.props.onClick}>
            play
          </button>
        )}
        {this.props.playing && (
          <button id="pause" onClick={this.props.onClick}>
            pause
          </button>
        )}
        <button id="skip" onClick={this.props.onClick}>
          skip
        </button>
      </div>
    );
  }
}

export default Controls;
