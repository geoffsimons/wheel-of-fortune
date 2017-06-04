import React from 'react';
import PropTypes from 'prop-types';
import debug from '../util/debug';
// const debug = console.log;

function Wedge(props) {
  const { angle, label, bgcolor, color, offset } = props;
  debug('ANGLE:', angle);
  const r = 100; // TODO: Use props to get r.
  const cx = r;
  const cy = r;
  const p = {
    x: cx + r * Math.cos(angle * Math.PI / 180),
    y: cy + r * Math.sin(angle * Math.PI / 180)
  };
  // const h = Math.min(100, Math.floor(100 * Math.tan(angle * Math.PI / 90)));
  // const points = `100,100 200,${100-h} 200,${100+h}`;
  const points = `${cx},${cy} ${p.x},${p.y} ${cx+r},${cy+r} ${cx+r},${cy}`;
  const rot = `rotate(${offset}, 100, 100)`;
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: `rotate(${offset}deg)`,
    transformOrigin: '100px 100px',
    // border: '1px solid red'
  };
  debug('POINTS:', points);
  debug('ROT:', rot);
  return(
    <svg width="200" height="200"
      style={style}
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="myClip">
          <polygon points={points} />
        </clipPath>
      </defs>
      <circle fill={bgcolor} cx="100" cy="100" r="100"
              clipPath="url(#myClip)"/>
      <text x="195" y="113" textAnchor="end"
              fontFamily="Arial" fontSize="35"
              stroke="#000" fill={color || '#000'}
              transform={`rotate(${angle/2}, ${cx},${cy})`}>{label}</text>
    </svg>
  )
}
// <polygon points={points} />


Wedge.propTypes = {
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  label: PropTypes.string,
  angle: PropTypes.number,
  offset: PropTypes.number
  // TODO: Add width and height of container.
}

export default Wedge;
