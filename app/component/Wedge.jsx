import React from 'react';
import PropTypes from 'prop-types';

function Wedge(props) {
  const { angle, label, bgcolor, color, offset } = props;
  const h = Math.floor(100 * Math.tan(angle * Math.PI / 180));
  const points = `100,100 200,${100-h} 200,${100+h}`;
  const rot = `rotate(${offset}, 100, 100)`;

  return(
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="myClip">
          <polygon points={points} />
        </clipPath>
      </defs>
      <circle fill={bgcolor} cx="100" cy="100" r="100"
              clipPath="url(#myClip)"
              transform={rot} />
      <text x="195" y="113" textAnchor="end"
              fontFamily="Arial" fontSize="35" stroke="#000" fill={color || '#000'}
              transform={rot}>{label}</text>
    </svg>
  )
}

Wedge.propTypes = {
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  label: PropTypes.string,
  angle: PropTypes.number,
  offset: PropTypes.number
  // TODO: Add width and height of container.
}

export default Wedge;
