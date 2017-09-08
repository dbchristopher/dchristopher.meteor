/* global requestAnimationFrame */

import { mapValues, times, partial } from 'lodash';

const diameter = 100;
const margin = 0;

function drawCircle(ctx, origin, hue, sizeFrame) {
  ctx.beginPath();
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = `hsl(${hue}, 100%, 4%)`;
  const additive = (Math.sin(sizeFrame) + 1) * 30 + 10;
  ctx.arc(origin.x, origin.y, (diameter / 2) + additive, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function fillFrame(canvas, origin, hue, sizeFrame) {
  const rows = Math.ceil(canvas.height / (diameter)) + 1;
  const cols = Math.ceil(canvas.width / (diameter)) + 3;
  const ctx = canvas.getContext('2d');
  times(cols, (c) => {
    const hOrigin = { x: origin.x + ((diameter + margin) * c) - diameter, y: origin.y - diameter };
    drawCircle(ctx, hOrigin, hue, sizeFrame);
    times(rows, (r) => {
      const vOrigin = { x: hOrigin.x, y: hOrigin.y + ((diameter + margin) * r) + diameter + margin };
      drawCircle(ctx, vOrigin, hue, sizeFrame);
    });
  });
}

function addBackground(canvas, hue) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `hsl(${hue}, 60%, 31.4%)`;

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, `hsl(${hue}, 60%, 30%)`);
  gradient.addColorStop(1, `hsl(${hue}, 60%, 15%)`);
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
  const incrementHue = partial(increment, 0.3, 360);
  const incrementSize = partial(increment, Math.PI / 300, 180);
  const callback = partial(animate, canvas, mapValues(origin, incrementPos), incrementHue(hue), incrementSize(sizeFrame));
  requestAnimationFrame(callback);
}
