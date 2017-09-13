/* global window, addEventListener */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import animateHeader from './_helper-animateHeader';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.setCanvasDimensions = this.setCanvasDimensions.bind(this);
    this.measureBrowser = this.measureBrowser.bind(this);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
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
    canvas.height = this.state.height * 0.9;
  }

  measureBrowser() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    return (
      <header className="header flex-row flex-row__align-center flex-row__direction-vertical" style={{ width: this.state.width, height: this.state.height * 0.9 }}>
        <div className="flex-column--fixed header__navbar header__navbar--top">
          <a href="/downloads/resume.pdf">Resume (PDF)</a>
          <Link to="/contact">Contact Me</Link>
        </div>
        <div className="flex-column">
          <div className="flex-row flex-row__align-center flex-row__full-height">
            <div className="flex-column">
              <canvas className="header__canvas" ref={(el) => { this.canvas = el; }} />
              <h1 className="header__title">Daniel Christopher</h1>
              <h2 className="header__subtitle">Senior Front-End Web Developer</h2>
            </div>
          </div>
        </div>
        <div className="flex-column--fixed header__navbar header__navbar--bottom">
          Scroll For More
        </div>
      </header>
    );
  }
}

export default componentName;