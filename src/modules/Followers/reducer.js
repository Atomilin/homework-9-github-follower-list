import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер

const isLoading = handleActions(
    {
      [fetchRequest]: () => true,
      [fetchSuccess]: () => false,
      [fetchFailure]: () => false
    },
    false
  );
  
  const data = handleActions(
    {
      [fetchSuccess]: (state, { payload }) => payload
    },
    null
  );
  
  const error = handleActions(
    {
      [fetchSuccess]: () => '',
      [fetchFailure]: (state, { payload }) => payload
    },
    ''
  );
  
  export default combineReducers({
    isLoading,
    data,
    error
  });
  
  const getFollowers = state => state.followers;
  
  export const getFollowersData = createSelector(
    getFollowers,
    followers => followers.data
  );
  
  export const getFollowersIsLoading = createSelector(
    getFollowers,
    followers => followers.isLoading
  );