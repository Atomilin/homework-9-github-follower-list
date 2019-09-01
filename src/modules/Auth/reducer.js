import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { addApiKey } from './actions';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey
const apiKey = handleActions(
  {
    [addApiKey]: (state, { payload }) => payload
  },
  ''
);

export default combineReducers({
  apiKey
});

const getAuth = state => state.auth;

export const getApiKey = createSelector(
  getAuth,
  auth => auth.apiKey
);

export const getIsAuthorized = createSelector(
  getAuth,
  auth => Boolean(auth.apiKey)
);