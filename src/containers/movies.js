import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/movies';
import { moviesSelector } from '../selectors';

const mapStateToProps = ({moviesState, fetchingItemsState}) => {
  return {
    movies: moviesSelector(moviesState),
    loadState: fetchingItemsState,
  };
}

const MoviesContainer = connect(
  mapStateToProps,
  actionCreators
)(Component);

export default MoviesContainer;
