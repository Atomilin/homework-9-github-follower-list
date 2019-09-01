import { createActions } from 'redux-actions';

// Здесь не хватает экшенов для модуля FOLLOWERS.
// FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE
export const {
    followers: { fetchRequest, fetchSuccess, fetchFailure }
  } = createActions({
    FOLLOWERS: {
      FETCH_REQUEST: userLogin => userLogin,
      FETCH_SUCCESS: data => data,
      FETCH_FAILURE: error => error
    }
  });