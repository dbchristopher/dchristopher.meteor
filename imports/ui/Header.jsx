import React, { Component } from 'react';
import _ from 'lodash';

const dimensions = { w: 30, h: 60 };
const origin = { x: 0, y: 0 };
const margin = 40;

function drawTriangle(ctx, origin) {
  ctx.beginPath();
  ctx.globalCompositeOperation = "lighter";
  ctx.fillStyle = 'RGBA(19, 124, 201, .10)';
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(origin.x + dimensions.w, origin.y + (dimensions.h/2));
  ctx.lineTo(origin.x, origin.y + dimensions.h)
  ctx.fill();
  ctx.closePath();
}

function drawTriangleLeft(ctx, origin) {
  ctx.beginPath();
  ctx.globalCompositeOperation = "lighter";
  ctx.fillStyle = 'RGBA(19, 124, 201, .10)';
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(origin.x - dimensions.w, origin.y + (dimensions.h/2));
  ctx.lineTo(origin.x, origin.y + dimensions.h)
  ctx.fill();
  ctx.closePath();
}

function fillFrame(canvas, origin, shape) {
  const rows = Math.ceil(canvas.height / (dimensions.h + margin));
  const cols = Math.ceil(canvas.width / (dimensions.w + margin));
  const ctx = canvas.getContext("2d")

  _.times(cols + 2, (c) => {
    const hOrigin = { x: origin.x + ((dimensions.w + margin) * c) - dimensions.w, y: origin.y };
    shape(ctx, hOrigin);
    _.times(rows-1, (r) =>  {
      const vOrigin = { x: hOrigin.x, y: hOrigin.y + ((dimensions.h + margin) * r) + dimensions.h + margin};
      shape(ctx, vOrigin);
    });
  });
}

function addBackground(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#0D6BB0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animate(canvas, origin) {
  const ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame

  addBackground(canvas);
  fillFrame(canvas, origin, drawTriangle);
  fillFrame(canvas, {x: origin.x * -1, y: origin.y - (dimensions.h / 2 + margin / 2) }, drawTriangleLeft);

  const originOffset = { x: (origin.x + .25) % (dimensions.w + margin), y: origin.y}
  const callback = _.partial(animate, canvas, originOffset, dimensions);
  requestAnimationFrame(callback);
}


class componentName extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const canvas = this.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate(canvas, origin);
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