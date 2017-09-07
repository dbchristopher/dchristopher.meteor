/* global requestAnimationFrame */

import { mapValues, times, partial } from 'lodash';

const diameter = 100;
const margin = 0;

function drawCircle(ctx, origin, hue) {
  ctx.beginPath();
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = `hsl(${hue}, 100%, 4%)`;
  ctx.arc(origin.x, origin.y, diameter / 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function fillFrame(canvas, origin, hue) {
  const rows = Math.ceil(canvas.height / (diameter)) + 1;
  const cols = Math.ceil(canvas.width / (diameter)) + 3;
  const ctx = canvas.getContext('2d');
  times(cols, (c) => {
    const hOrigin = { x: origin.x + ((diameter + margin) * c) - diameter, y: origin.y - diameter };
    drawCircle(ctx, hOrigin, hue);
    times(rows, (r) => {
      const vOrigin = { x: hOrigin.x, y: hOrigin.y + ((diameter + margin) * r) + diameter + margin };
      drawCircle(ctx, vOrigin, hue);
    });
  });
}

function addBackground(canvas, hue) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `hsl(${hue},20%,31.4%)`;
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

export default function animate(canvas, origin = { x: 0, y: 0 }, hue = 189) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame

  addBackground(canvas, hue);
  fillFrame(canvas, origin, hue);
  fillFrame(canvas, mapValues({x: origin.x, y: offset(origin.y)}, invert), hue);

  const incrementPos = partial(increment, .15, diameter + margin);
  const incrementHue = partial(increment, .3, 360)
  const callback = partial(animate, canvas, mapValues(origin, incrementPos), incrementHue(hue));
  requestAnimationFrame(callback);
}
