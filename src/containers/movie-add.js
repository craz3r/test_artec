import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/movie-add';

const mapStateToProps = ({movieGenres}) => {
  return {
    genres: movieGenres
  }
}

const MovieDetailContainer = connect(
  mapStateToProps,
  actionCreators
)(Component);

export default MovieDetailContainer;
