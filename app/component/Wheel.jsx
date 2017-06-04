import React from 'react';
import PropTypes from 'prop-types';
import debug from '../util/debug';
// const debug = console.log;
import Wedge from './Wedge';

// TODO: Build wedges from prizes array.
// TODO: Accept a prop for radius, or for width & height.
function Wheel(props) {
  const prizes = [
    {
      color: '#975bc1',
      weight: 1,
      label: '100'
    },
    {
      color: '#b23caa',
      weight: 1,
      label: '50'
    },
    {
      color: '#41bf73',
      weight: 1,
      label: '250'
    },
    {
      color: '#b23caa',
      weight: 1,
      label: '50'
    },
    {
      color: '#443aad',
      weight: 1,
      label: '150'
    },
    {
      color: '#975bc1',
      weight: 1,
      label: '100'
    },
    {
      color: '#b23caa',
      weight: 1,
      label: '50'
    },
    {
      color: '#e5e059',
      weight: 1,
      label: '200'
    },
  ];
  const style = {
    transform: `rotate(${props.angle}deg)`,
    transformOrigin: '100px 100px',
    position: 'relative',
    // border: '1px solid black',
    height: '200px',
    width: '200px' // Prevents a weird z-index overlap
  };
  // debug('TRANS:', trans);
  let sum = 0;
  prizes.forEach(p => sum += p.weight);
  const base = 360 / sum;
  debug('SUM:', sum);
  debug('BASE:', base);
  let offset = 0;
  prizes.forEach(p => {
    p.offset = offset;
    p.angle = base * p.weight;
    offset += p.angle;
  });
  const wedges = prizes.map((p, index) => {
    return <Wedge key={index} bgcolor={p.color} label={p.label} angle={p.angle} offset={p.offset} />;
  });
  debug('PRIZES:', prizes);
  debug('WEDGES:', wedges);
  return(
     <div id="wheel" style={style}>
       {wedges}
     </div>
  );
}
// <Wedge bgcolor="#975bc1" label="100" angle={30} offset={0} />
// <Wedge bgcolor="#b23caa" label="50"  angle={30} offset={72} />
// <Wedge bgcolor="#41bf73" label="150" angle={30} offset={144} />
// <Wedge bgcolor="#443aad" label="200" angle={30} offset={216} />
// <Wedge bgcolor="#e5e059" label="250" angle={30} offset={288} />

Wheel.propTypes = {
  prizes: PropTypes.array,
  angle: PropTypes.number
}

export default Wheel;
