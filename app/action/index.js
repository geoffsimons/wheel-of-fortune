import config from '../config/wheel';
import debug from '../util/debug';

const MAX_VELOCITY = 2000; // degrees per second
const ACCELERATION = 200;  // % per second per second
const FRICTION     = -50; // % per second per second

function clamp(x, min, max) {
  if(x < min) return min;
  if(x > max) return max;
  return x;
}

export function useSpin() {
  return { type: 'USE_SPIN' };
}

export function addPoints(points) {
  return {
    type: 'ADD_POINTS',
    points
  }
}

// TODO: Refactor actions into separate models.
export function startTicker() {
  return { type: 'START_TICKER' };
}

export function stopTicker() {
  return { type: 'STOP_TICKER' };
}

export function pressSpin() {
  return (dispatch) => {
    dispatch({ type: 'PRESS_SPIN' });
    dispatch({ type: 'USE_SPIN' });
  }
}

export function releaseSpin() {
  // TODO: If wheel.velocity < MIN_VELOCITY, prevent tiny spin
  //       However, it's also possible to re-press and release
  //       which would look the same. We should probably
  //       set a timestamp for when the spinStarted. Then we
  //       can use that to determine if a spin is too short.
  //       We can also disable the spin button after release.
  return { type: 'RELEASE_SPIN' };
}

export function completeSpin() {
  return (dispatch, getState) => {
    const { wheel } = getState();
    // TODO: How do we know what wedge the wheel stopped on?
    const { angle } = wheel;
    const prize = config.getPrize(angle); // TODO += 270 % 360?
    console.log('CONFIG:', config);
    console.log('PRIZE:', prize);
    dispatch({
      type: 'COMPLETE_SPIN',
      spin: { angle, prize }
    });
    // TODO: Change prize model to have a value or points.
    // TODO: Some wedges might have prizes that do something else.
    //        This would be the place to execute that method.
    // prize.award();
    dispatch(addPoints(Number(prize.label)));
  };
}

export function tickTime() {
  return (dispatch, getState) => {
    const { wheel, anim } = getState();
    debug('TICK wheel:', wheel);
    debug('TICK anim:', anim);
    const t = Date.now();
    if(anim.lastFrameTime) {
      const dt = (t - anim.lastFrameTime) / 1000;
      // TODO: calculate wheel delta
      const v = wheel.velocity * MAX_VELOCITY / 100;
      const da = v * dt;
      debug('v:', v);
      debug('dt:', dt);
      const dv = wheel.pressTime ?
                 ACCELERATION * dt :
                 FRICTION * dt;
      debug('dv:', dv);
      dispatch(updateWheel(
        wheel.angle + da,
        clamp(wheel.velocity + dv, 0, 100)
      ));
    }
    dispatch({ type: 'TIME_TICK', time: t });
  };
}

export function updateWheel(angle, velocity) {
  // TODO: assert 0 < velocity < 100
  return {
    type: 'UPDATE_WHEEL',
    angle: angle % 360,
    velocity
  };
}

// TODO Deal with END_OF_SPIN
