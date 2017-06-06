import React from 'react';
import PropTypes from 'prop-types';
// const debug = console.log;

function SpinButton(props) {
  const { startSpin, isSpinning, velocity } = props;
  // debug('SpinButton', props);
  const handlePress = () => {
    if(!isSpinning) return startSpin();
  };
  const fg = '#fff';
  const bg = '#004ff9';
  return(
    <div
      className="btn"
      onMouseDown={handlePress}
      onTouchStart={handlePress}
      style={{
        background: isSpinning ? fg : bg,
        color: isSpinning ? '#000' : fg
      }}>
      <div
        className="meter"
        style={{
          width: Math.round(velocity*0.9) +'%'
        }}>
      </div>
      <label>SPIN</label>
    </div>
  );
}

SpinButton.propTypes = {
  startSpin: PropTypes.func,
  isSpinning: PropTypes.bool,
  velocity: PropTypes.number
}

export default SpinButton;
