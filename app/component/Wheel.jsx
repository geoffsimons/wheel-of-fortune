import React from 'react';
import PropTypes from 'prop-types';
import debug from '../util/debug';
import Wedge from './Wedge';

// TODO: Build wedges from prizes array.
function Wheel(props) {
  const style = {
    transform: `rotate(${props.angle}deg)`,
    transformOrigin: '100px 100px',
    // border: '1px solid black',
    width: '200px' // Prevents a weird z-index overlap
  };
  // debug('TRANS:', trans);
  const h = Math.floor(100 * Math.tan(30 * Math.PI / 180));
  const points = `100,100 200,${100-h} 200,${100+h}`;
  return(
     <div id="wheel" style={style}>
       <Wedge bgcolor="#69ff47" label="100" angle={30} offset={0} />
       <Wedge bgcolor="#69ff47" label="100" angle={30} offset={0} />
       <Wedge bgcolor="#69ff47" label="100" angle={30} offset={0} />
       <Wedge bgcolor="#69ff47" label="100" angle={30} offset={0} />
       <Wedge bgcolor="#69ff47" label="100" angle={30} offset={0} />
     </div>
  );
  // return(
  //   <div id="wheel" style={style}>
  //     <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  //       <defs>
  //         <clipPath id="myClip">
  //           <polygon points={points} />
  //         </clipPath>
  //       </defs>
  //
  //       <circle fill="#69ff47" cx="100" cy="100" r="100"
  //               clipPath="url(#myClip)"/>
  //       <text x="195" y="113" textAnchor="end"
  //               fontFamily="Arial" fontSize="35" stroke="#000">150</text>
  //       <circle fill="#ff00c3" cx="100" cy="100" r="100"
  //               clipPath="url(#myClip)"
  //               transform="rotate(90, 100, 100)"/>
  //       <text x="195" y="113" textAnchor="end"
  //               fontFamily="Arial" fontSize="35" stroke="#000"
  //               transform="rotate(90, 100,100)">100</text>
  //       <circle fill="#00faff" cx="100" cy="100" r="100"
  //               clipPath="url(#myClip)"
  //               transform="rotate(180, 100, 100)"/>
  //       <text x="195" y="113" textAnchor="end"
  //               fontFamily="Arial" fontSize="35" stroke="#000"
  //               transform="rotate(180, 100,100)">200</text>
  //       <circle fill="#0e004c" cx="100" cy="100" r="100"
  //               clipPath="url(#myClip)"
  //               transform="rotate(180, 100, 100)"/>
  //       <text x="195" y="113" textAnchor="end"
  //               fontFamily="Arial" fontSize="35" stroke="#000"
  //               transform="rotate(180, 100,100)">250</text>
  //       <circle fill="#a100ff" cx="100" cy="100" r="100"
  //               clipPath="url(#myClip)"
  //               transform="rotate(270, 100, 100)"/>
  //       <text x="195" y="113" textAnchor="end"
  //               fontFamily="Arial" fontSize="35" stroke="#000"
  //               transform="rotate(270, 100,100)">50</text>
  //     </svg>
  //   </div>
  // );
}

Wheel.propTypes = {
  prizes: PropTypes.array,
  angle: PropTypes.number
}

export default Wheel;
