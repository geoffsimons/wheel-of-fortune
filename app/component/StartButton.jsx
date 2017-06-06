import React from 'react';
import PropTypes from 'prop-types';

// TODO: Seems a little weird to make our own button.
// TODO: Button should track pressed state and only fire handleClick
//       when pressed & event detected.
function StartButton(props) {
  const { handleClick } = props;
  const fg = '#fff';
  const bg = '#0c0';
  // TODO: Should we use onClick, or the 2 events below?
  return(
    <button
      onClick={handleClick}
      className="btn pressable">
      <label>START</label>
    </button>
  );
}
// onMouseUp={handleClick}
// onTouchEnd={handleClick}
// onMouseDown={handleClick}
// onTouchStart={handleClick}

StartButton.propTypes = {
  handleClick: PropTypes.func
}

export default StartButton;
