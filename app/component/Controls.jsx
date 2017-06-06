import React from 'react';
import PropTypes from 'prop-types';
import debug from '../util/debug';

function Controls(props) {
  debug('Controls()', props);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    // debug('FORM:', form);
    const ang = Number(form.angle.value);
    const vel = Number(form.velocity.value);
    debug('Angle:', ang);
    debug('Velocity:', vel);
    props.updateWheel(ang, vel);
  }
  return(
    <div className="controls">
      <form onSubmit={handleSubmit}>
        <div>
          <input name="angle" autoComplete="off" placeholder="Angle" />
          <input name="velocity" autoComplete="off" placeholder="Velocity" />
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
