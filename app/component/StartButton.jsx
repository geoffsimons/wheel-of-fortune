import React from 'react';
import PropTypes from 'prop-types';

function StartButton(props) {
  const { handleClick } = props;
  const fg = '#fff';
  const bg = '#0c0';
  // TODO: Should we use onClick, or the 2 events below?
  return(
    <div
      onClick={handleClick}
      className="btn pressable">
      <label>START</label>
    </div>
  );
}
// onMouseDown={handleClick}
// onTouchStart={handleClick}
// style={{
//   borderRadius: '5px',
//   width: '100px',
//   height: '20px',
//   transform: 'translateX(-50%)',
//   background: '#00f935',
//   color: '#fff',
//   textAlign: 'center',
//   cursor: 'pointer'
// }}>

StartButton.propTypes = {
  handleClick: PropTypes.func
}

export default StartButton;
