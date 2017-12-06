import { show } from '../api';
import { showRequest, showSuccess, showFailure } from '../actions';

const showMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === showRequest.toString()) {
    let showId = action.payload;

    show(showId)
      .then(response => {
        console.log(response);
        store.dispatch(showSuccess(response));
      })
      .catch(error => {
        store.dispatch(showFailure(error));
      });
  }
  return result;
};

export default showMiddleware;
