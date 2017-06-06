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
    <div
      onMouseUp={handleClick}
      onTouchEnd={handleClick}
      className="btn pressable">
      <label>START</label>
    </div>
  );
}
// onMouseDown={handleClick}
// onTouchStart={handleClick}

StartButton.propTypes = {
  handleClick: PropTypes.func
}

export default StartButton;
