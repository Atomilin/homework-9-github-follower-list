import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// Обратите внимание на тесты, они помогут вам написать код редьюсера
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
  
  const getUser = state => state.user;
  
  export const getUserData = createSelector(
    getUser,
    user => user.data
  );
  
  export const getUserIsLoading = createSelector(
    getUser,
    user => user.isLoading
  );