import { createSelector } from 'reselect';

export const getMovies = moviesState => moviesState;

export const moviesSelector = createSelector(
  getMovies,
  items => Object.values(items).reverse()
);
