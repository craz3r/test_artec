import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchItemsRequest = createAction('ITEMS_FETCH_REQUEST');
export const fetchItemsSuccess = createAction('ITEMS_FETCH_SUCCESS');
export const fetchItemsFailure = createAction('ITEMS_FETCH_FAILURE');

export const fetchItems = () => async (dispatch) => {
  dispatch(fetchItemsRequest());
  try {
    const res = await axios.get('http://localhost:3001/movies')
    dispatch(fetchItemsSuccess({ items: res.data }));
  } catch(err) {
    console.log(err);
    dispatch(fetchItemsFailure());
  }
};

export const addMovie = createAction('ITEM_ADD');
export const editMovie = createAction('ITEM_EDIT');
