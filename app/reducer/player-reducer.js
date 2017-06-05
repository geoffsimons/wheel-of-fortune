export default function player(state = {
  numSpins: 0,
  score: 0
}, action) {
  if(action.type === 'START_GAME') {
    return Object.assign({}, state, {
      numSpins: 10,
      score: 0
    });
  }
  if(action.type === 'USE_SPIN') {
    return Object.assign({}, state, {
      numSpins: state.numSpins - 1
    });
  }
  if(action.type === 'ADD_POINTS') {
    return Object.assign({}, state, {
      score: state.score + action.points
    });
  }
  return state;
}
