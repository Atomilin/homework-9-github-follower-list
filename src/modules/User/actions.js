import { createActions } from 'redux-actions';

// Реализуйте недостающие экшены
export const {
    user: { fetchRequest, fetchSuccess, fetchFailure }
  } = createActions({
    USER: {
      FETCH_REQUEST: login => login,
      FETCH_SUCCESS: data => data, //({ name, bio, avatar_url }) => ({ name, bio, avatar_url }),
      FETCH_FAILURE: error => error
    }
  });