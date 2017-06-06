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
  debug('PRIZES:', prizes);
  debug('WEDGES:', wedges);
  return(
    <div className="wheel">
      <div className="wedges"
        style={style}>
        {wedges}
      </div>
    </div>
  );
}

Wheel.propTypes = {
  prizes: PropTypes.array,
  angle: PropTypes.number
}

export default Wheel;
