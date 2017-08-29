import React, { Component } from 'react';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  render() {
    return (
      <header className="header">
        <canvas className="header__canvas" ref={(el) => { this.canvas = el; }}></canvas>
        <h1>Daniel Christopher</h1>
      </header>
    );
  }
}

export default componentName;