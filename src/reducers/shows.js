import { handleActions } from 'redux-actions';
import { showRequest, showSuccess, showFailure } from '../actions';

const initState = {
  isFetching: false,
  show: {},
  error: null
};
const shows = handleActions(
  {
    [showRequest]: (state, action) => ({
      isFetching: true
    }),
    [showSuccess]: (state, action) => ({
      isFetching: false,
      show: action.payload
    }),
    [showFailure]: (state, action) => ({
      isFetching: false,
      error: action.error
    })
  },
  initState
);

export default shows;
