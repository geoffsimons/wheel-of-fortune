import debug from '../util/debug';

const wheel = {
  prizes: [
    {
      color: '#2d34ff',
      weight: 2,
      label: '100'
    },
    {
      color: '#b23caa',
      weight: 2.5,
      label: '50'
    },
    {
      color: '#41bf73',
      weight: 1.5,
      label: '250'
    },
    {
      color: '#b23caa',
      weight: 2.5,
      label: '50'
    },
    {
      color: '#ed5e0b',
      weight: 2,
      label: '150'
    },
    {
      color: '#b23caa',
      weight: 2.5,
      label: '50'
    },
    {
      color: '#2d34ff',
      weight: 2,
      label: '100'
    },
    {
      color: '#b23caa',
      weight: 2.5,
      label: '50'
    },
    {
      color: '#e5e059',
      weight: 1.5,
      label: '200'
    },
    {
      color: '#b23caa',
      weight: 2.5,
      label: '50'
    },
  ]

}

// Update prizes to setup angles and offsets.
let sum = 0;
wheel.prizes.forEach(p => sum += p.weight);
const base = 360 / sum;
debug('SUM:', sum);
debug('BASE:', base);
let offset = 0;
wheel.prizes.forEach(p => {
  p.offset = offset;
  p.angle = base * p.weight;
  offset += p.angle;
});

wheel.getPrize = function(a) {
  a = 360 + 270 - a;
  a = a % 360;
  for(let i = 0; i < wheel.prizes.length; i++) {
    const prize = wheel.prizes[i];
    const { angle, offset } = prize;
    if(offset < a && angle + offset > a) {
      return prize;
    }
  }
  return null; // NOTE THIS SHOULD NEVER HAPPEN.
}

export default wheel;
