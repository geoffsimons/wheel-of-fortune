import React from 'react';
import PropTypes from 'prop-types';
import debug from '../util/debug';
// const debug = console.log;
import Wedge from './Wedge';
import config from '../config/wheel';

debug('CONFIG:', config);

// TODO: Accept prop.prizes.
// TODO: Accept a prop for radius, or for width & height.
function Wheel(props) {
  const style = {
    transform: `rotate(${props.angle}deg)`
  };
  const { prizes } = config;
  // debug('TRANS:', trans);
  const wedges = prizes.map((p, index) => {
    return <Wedge key={index} bgcolor={p.color} label={p.label} angle={p.angle} offset={p.offset} />;
  });
  const labels = prizes.map((p, index) => {
    return(
      <div className="labels"
        style={{
          transform: `rotate(${p.offset + p.angle/2}deg)`
        }}>
        <label key={index}>{p.label}</label>
      </div>
    );
  });
  debug('PRIZES:', prizes);
  debug('WEDGES:', wedges);
  return(
    <div className="wheel">
      <div className="wedges"
        style={style}>
        {wedges}
        {labels}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"
        width="50" height="50"
        style={{
          position: 'absolute',
          top: '-1px',
          left: '50%',
          transform: 'translateX(-50%) scaleX(0.5)'
        }}
        >
        <defs>
          <mask id="myMask">
            <rect width="100%" height="100%" x="0" y="0" fill="white" />
            <circle cx="-25%" cy="70%" r="65%" />
            <circle cx="125%" cy="70%" r="65%" />
            <circle cx="0%" cy="100%" r="50%" />
            <circle cx="100%" cy="100%" r="50%" />
          </mask>
        </defs>
        <rect width="100%" height="100%" x="0" y="0" fill="#00f935" mask="url(#myMask)" />
      </svg>
    </div>
  );
}

Wheel.propTypes = {
  prizes: PropTypes.array,
  angle: PropTypes.number
}

export default Wheel;
