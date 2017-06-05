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
      onMouseDown={handlePress}
      onTouchStart={handlePress}
      style={{
        borderRadius: '5px',
        width: '100px',
        height: '20px',
        transform: 'translateX(-50%)',
        background: isSpinning ? fg : bg,
        color: isSpinning ? '#000' : fg,
        textAlign: 'center',
        cursor: 'pointer'
      }}>
      <div style={{
          width: Math.round(velocity) +'%',
          height: '100%',
          position: 'absolute',
          background: '#00f935'
        }}>
      </div>
      SPIN
    </div>
  );
}

SpinButton.propTypes = {
  startSpin: PropTypes.func,
  isSpinning: PropTypes.bool,
  velocity: PropTypes.number
}

export default SpinButton;
