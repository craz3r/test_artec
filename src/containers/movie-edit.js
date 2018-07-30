import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/movie-edit';

const mapStateToProps = ({moviesState, movieGenres}, {match}) => {
  return {
    initialValues: moviesState[match.params.id],
    genres: movieGenres
  };
}

const MovieDetailContainer = connect(
  mapStateToProps,
  actionCreators
)(Component);

export default MovieDetailContainer;
