/* global window, addEventListener */

import React, { Component } from 'react';
import animateHeader from './_helper-animateHeader';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.setCanvasDimensions = this.setCanvasDimensions.bind(this);
    this.measureBrowser = this.measureBrowser.bind(this);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    animateHeader(this.canvas);
    this.setCanvasDimensions();
    addEventListener('resize', () => {
      this.measureBrowser();
      this.setCanvasDimensions();
    });
  }

  setCanvasDimensions() {
    const canvas = this.canvas;
    canvas.width = this.state.width;
  }

  measureBrowser() {
    this.setState({
      width: window.innerWidth,
    });
  }
  render() {
    return (
      <div className="navbar flex-row flex-row__align-v-center flex-row__direction-vertical">
        <canvas className="navbar__canvas" ref={(el) => { this.canvas = el; }} />
        {this.props.children}
      </div>
    );
  }
}

export default NavBar;