import { search } from '../api';
import { searchRequest, searchSuccess, searchFailure } from '../actions';

const searchMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === searchRequest.toString()) {
    let showName = action.payload;

    search(showName)
      .then(shows => {
        store.dispatch(searchSuccess(shows));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }
  return result;
};

export default searchMiddleware;
