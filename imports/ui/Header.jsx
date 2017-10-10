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
    canvas.height = this.state.height * 0.8;
  }

  measureBrowser() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    return (
      <header className="header flex-row flex-row__align-center flex-row__direction-vertical" style={{ width: this.state.width, height: this.state.height * 0.8 }}>
        <div className="flex-column">
          <div className="flex-row flex-row__align-center flex-row__full-height">
            <div className="flex-column">
              <canvas className="header__canvas" ref={(el) => { this.canvas = el; }} />
              <h1 className="page-title">Daniel Christopher</h1>
              <h2 className="header__subtitle">Maker of things for the web.</h2>
              <div className="header__links">
                <div className="flex-column--fixed header__navbar">
                  <Link to="/contact" className="header__link text--white link--bare">Contact</Link>
                  <a href="/downloads/resume-public.pdf" className="header__link text--white link--bare">Download Resume (PDF)</a>
                  <div className="header__social-links">
                    <a href="https://github.com/dbchristopher" target="_blank" className="header__link text--white link--bare"><img className="header__social-icon" src="/images/github.svg" alt="Github" /></a>
                    <a href="https://www.instagram.com/dxchristopher/" target="_blank" className="header__link text--white link--bare"><img className="header__social-icon" src="/images/instagram.svg" alt="Instagram" /></a>
                    <a href="https://twitter.com/uxmonk" target="_blank" className="header__link text--white link--bare"><img className="header__social-icon" src="/images/twitter.svg" alt="Twitter" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default componentName;