import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions';

const initState = {
  isFetching: false,
  shows: [],
  error: null
};
const search = handleActions(
  {
    [searchRequest]: (state, action) => ({
      isFetching: true
    }),
    [searchSuccess]: (state, action) => ({
      isFetching: false,
      shows: action.payload
    }),
    [searchFailure]: (state, action) => ({
      isFetching: false,
      error: action.error
    })
  },
  initState
);

export default search;
