import React, { Component } from 'react';

/* global requestAnimationFrame */

import { partial } from 'lodash';

const width = 60;
const height = 5;
const margin = 0;

function drawShape(ctx, origin, hue) {
  ctx.beginPath();
  ctx.fillStyle = `hsl(${hue}, 100%, 80%)`;
  ctx.rect(origin.x, origin.y, width, height);
  ctx.fill();
  ctx.closePath();
}

function addBackground(canvas, hue) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `hsl(${hue}, 100%, 100%)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function increment(speed, modulous, val) {
  const incremented = (val + speed) % modulous;
  if (incremented <= 0) {
    return modulous;
  }
  return incremented;
}

function animate(canvas, origin1 = { x: 0, y: 0 }, origin2 = { x: (width + margin) * 2, y: 0 }, hue = 189) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame

  addBackground(canvas, hue);

  drawShape(ctx, origin1, hue);
  drawShape(ctx, { x: width + margin, y: 0 }, hue);
  drawShape(ctx, origin2, hue);

  const incrementPos1 = partial(increment, 0.1, (width + margin) * 2);
  const incrementPos2 = partial(increment, -0.1, (width + margin) * 2);
  const incrementHue = partial(increment, 0.2, 360);

  const newOrigin1 = { x: incrementPos1(origin1.x), y: origin1.y };
  const newOrigin2 = { x: incrementPos2(origin2.x), y: origin2.y };

  const callback = partial(animate, canvas, newOrigin1, newOrigin2, incrementHue(hue));
  requestAnimationFrame(callback);
}


class Divider extends Component {
  constructor(props) {
    super(props);
    this.setCanvasDimensions = this.setCanvasDimensions.bind(this);
  }
  componentDidMount() {
    animate(this.canvas);
    this.setCanvasDimensions();
  }
  setCanvasDimensions() {
    const canvas = this.canvas;
    canvas.width = (width * 3) + (margin * 2);
    canvas.height = height;
  }
  render() {
    return (
      <div>
        <canvas className="divider" ref={(el) => { this.canvas = el; }} />
      </div>
    );
  }
}

export default Divider;