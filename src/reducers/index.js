import { combineReducers } from 'redux';
import firstReducer from '../reducers/firstReducer';
import { reducer as modalReducer } from 'react-redux-modal';
import registerReducer from '../reducers/registerReducer';
import loginReducer from '../reducers/loginReducer';

const rootReducer = combineReducers({
  firstReducer,
  loginReducer,
  registerReducer,
  modals: modalReducer,
})

export default rootReducer;
