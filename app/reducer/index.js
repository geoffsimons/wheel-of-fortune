import { combineReducers } from 'redux';
import wheel from './wheel-reducer';
import anim from './anim-reducer';
// import player from './player-reducer';

export default combineReducers({
  wheel,
  anim
  // player
});
