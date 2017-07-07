const initialState = {
  filtered: []
}

export default (state=initialState,action) => {
  switch (action.type) {
    case 'CHANGE_LIST':

      return Object.assign({}, state, {filtered: action.payload});

      break;
    default:
      return state
  }
}
