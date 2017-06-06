import React from 'react';
import PropTypes from 'prop-types';

// TODO: Allow for horizontal or vertical
function Meter(props) {
  const style = {
    transition: '75ms',
    width: `${props.value}%`,
    height: '10px',
    background: '#3F3'
  };
  return(
    <div className="meter">
      <div className="meter-bar" style={style}></div>
    </div>
  )
}

Meter.propTypes = {
  value: PropTypes.number
}

export default Meter;
