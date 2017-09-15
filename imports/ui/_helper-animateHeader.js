/* global requestAnimationFrame */

import { mapValues, times, partial } from 'lodash';

const diameter = 100;
const margin = 100;

function drawShape(ctx, origin, hue, sizeFrame) {
  ctx.beginPath();
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = `hsl(${hue}, 100%, 4%)`;
  const additive = ((Math.sin(sizeFrame) + 1) * 30) + 10;
  ctx.rect(origin.x, origin.y, diameter, diameter + additive);
  ctx.fill();
  ctx.closePath();
}

function fillFrame(canvas, origin, hue, sizeFrame) {
  const rows = Math.ceil(canvas.height / (diameter)) + 1;
  const cols = Math.ceil(canvas.width / (diameter)) + 3;
  const ctx = canvas.getContext('2d');
  times(cols, (c) => {
    const colOrigin = {
      x: (origin.x + ((diameter + (margin / 2)) * c)) - diameter,
      y: origin.y - diameter };
    drawShape(ctx, colOrigin, hue, sizeFrame);
    times(rows, (r) => {
      const rowOrigin = {
        x: colOrigin.x,
        y: colOrigin.y + ((diameter + margin) * r) + diameter + margin };
      drawShape(ctx, rowOrigin, hue, sizeFrame);
    });
  });
}

function addBackground(canvas, hue) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `hsl(${hue}, 60%, 40%)`;

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, `hsl(${hue}, 60%, 35%)`);
  gradient.addColorStop(1, `hsl(${hue}, 60%, 20%)`);
  ctx.fillStyle = gradient;

  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function invert(val) {
  const inverseNumber = val * -1;
  return inverseNumber;
}

function offset(val) {
  const offsetVal = val - (diameter / 2) - (margin / 2);
  return offsetVal;
}

function increment(speed, modulous, val) {
  const incremented = (val + speed) % modulous;
  return incremented;
}

export default function animate(canvas, origin = { x: 0, y: 0 }, hue = 189, sizeFrame = 0) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame

  addBackground(canvas, hue);
  fillFrame(canvas, origin, hue, sizeFrame);
  fillFrame(canvas, mapValues({ x: origin.x, y: offset(origin.y) }, invert), hue, sizeFrame);

  const incrementPos = partial(increment, 0.15, diameter + margin);
  const incrementHue = partial(increment, 0.2, 360);
  const incrementSize = partial(increment, Math.PI / 360, 360);
  const callback = partial(animate, canvas, mapValues(origin, incrementPos), incrementHue(hue), incrementSize(sizeFrame));
  requestAnimationFrame(callback);
}
