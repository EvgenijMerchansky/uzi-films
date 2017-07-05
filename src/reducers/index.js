import { combineReducers } from 'redux';
import firstReducer from '../reducers/firstReducer';
import { reducer as modalReducer } from 'react-redux-modal';
import registerReducer from '../reducers/registerReducer';

const rootReducer = combineReducers({
  firstReducer,

  registerReducer,
  modals: modalReducer,
})

export default rootReducer;
