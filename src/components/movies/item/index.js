import React, {Component} from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return(
      <article className='movie'>
        <h3 className='movie__title'>{movie.title}</h3>
        <div className='movie__headline'>
          <time className='movie__date'>Year: {movie.year}</time>
          <ul className='movie__genres-list'>
            Genres:
            {movie.genres && movie.genres.map((g, idx) => {
              return <li key={idx} className='movie__genre'>{g}</li>
            })}
          </ul>
        </div>
        <p className='movie__plot'>{movie.plot}</p>
        <div className='movie__meta meta'>
          <p className='meta__director'>Director: {movie.director}</p>
          <p className='meta__runtime'>Runtime: {movie.runtime} min.</p>
        </div>
        <div className='movie__actions'>
         <Link to={`movies/${movie.id}`} className='btn btn--primary'> More </Link>
         <Link to={`movies/${movie.id}/edit`} className='btn btn--secondary'> Edit </Link>
        </div>
      </article>
    )
  }
}
