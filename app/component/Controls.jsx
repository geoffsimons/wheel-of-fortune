import React from 'react';
import PropTypes from 'prop-types';
import debug from '../util/debug';

function Controls(props) {
  debug('Controls()', props);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    // debug('FORM:', form);
    debug('Angle:', form.angle.value);
    props.updateWheel(Number(form.angle.value));
  }
  return(
    <div className="controls">
      <form onSubmit={handleSubmit}>
        <div>
          <input name="angle" autoComplete="off" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
// <form onSubmit={handleSubmit}>

Controls.propTypes = {
  updateWheel: PropTypes.func
}

export default Controls;
