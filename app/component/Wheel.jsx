import React, { PropTypes } from 'react';
import debug from 'debug';

// TODO: Build wedges from prizes array.
function Wheel(props) {
  const trans = {
    transform: `rotate(${props.angle}deg)`,
    'transform-origin': '100px 100px'
  };
  debug('TRANS:', trans);
  return(
    <div id="wheel" style={trans}>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="myClip">
            <polygon points="100,100 200,0 200,200" />
          </clipPath>
        </defs>

        <circle fill="#3DD" cx="100" cy="100" r="100"
                clipPath="url(#myClip)"/>
        <circle fill="#8C8" cx="100" cy="100" r="100"
                clipPath="url(#myClip)"
                transform="rotate(90, 100, 100)"/>
        <circle fill="#C88" cx="100" cy="100" r="100"
                clipPath="url(#myClip)"
                transform="rotate(180, 100, 100)"/>
        <circle fill="#88C" cx="100" cy="100" r="100"
                clipPath="url(#myClip)"
                transform="rotate(270, 100, 100)"/>
        <text x="195" y="115" textAnchor="end"
                fontFamily="Arial" fontSize="35" stroke="#000"
                transform="rotate(90, 100,100)">100</text>
        <text x="195" y="115" textAnchor="end"
                fontFamily="Arial" fontSize="35" stroke="#000"
                transform="rotate(180, 100,100)">200</text>
        <text x="195" y="115" textAnchor="end"
                fontFamily="Arial" fontSize="35" stroke="#000"
                transform="rotate(270, 100,100)">50</text>
        <text x="195" y="115" textAnchor="end"
                fontFamily="Arial" fontSize="35" stroke="#000">150</text>
      </svg>
    </div>
  );
}

Wheel.propTypes = {
  prizes: PropTypes.array,
  angle: PropTypes.number
}

export default Wheel;