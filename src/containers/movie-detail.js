import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/movie-detail';

const mapStateToProps = ({moviesState}, {match}) => {
  return {
    detail: moviesState[match.params.id],
  };
}

const MovieDetailContainer = connect(
  mapStateToProps,
  actionCreators
)(Component);

export default MovieDetailContainer;
