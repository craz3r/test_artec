import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { keyBy, uniq } from 'lodash';
import * as actions from '../actions';

const fetchingItemsState = handleActions({
  [actions.fetchItemsRequest]() {
    return 'requested';
  },
  [actions.fetchItemsFailure]() {
    return 'failed';
  },
  [actions.fetchItemsSuccess]() {
    return 'successed';
  },
}, 'none');

const moviesState = handleActions({
  [actions.fetchItemsSuccess](state, { payload: { items } }) {
    return keyBy(items, 'id');
  },
  [actions.addMovie](state, { payload }) {
    const newId = +(new Date());
    return { ...state, [newId]: { id: newId, ...payload } }
  },
  [actions.editMovie](state, { payload }) {
    return { ...state, [payload.id]: payload };
  }
}, {})

const movieGenres = handleActions({
  [actions.fetchItemsSuccess](state, { payload: { items } }) {
    return uniq(Object.values(items).reduce((acc, i) => {
      return [ ...acc, ...i.genres ];
    }, []));
  }
}, []);

export default combineReducers({
  fetchingItemsState,
  moviesState,
  movieGenres,
  form: formReducer,
})
