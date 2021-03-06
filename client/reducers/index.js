// import all reducer js files
import { combineReducers } from 'redux';
import * as types from '../actions/actions';

// each reducer should have its initial state within its js file.
// Use a default parameter to pass this into reducer.
// reducers take the current state and an action object as parameters.
// reducers then have a switch statement with cases for each action type (from actionTypes.js).
function auth(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token'),
}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    default:
      return state;
  }
}

const reducers = combineReducers({
  // list all reducers here
  auth,
});


export default reducers;
