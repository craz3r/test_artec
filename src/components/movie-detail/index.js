import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class MovieDetail extends Component {
  render() {
    const { detail, match } = this.props;

    if (!detail) {
      return <p className='msg'>Loading ...</p>
    } else {
      return (
        <section className='movie-detail detail'>
          <h1 className='detail__title'>{detail.title}</h1>
          <div className='headline'>
            <div className='detail__info'>
              <time className='detail__year'>Year: {detail.year ? detail.year : 'Unknown'}</time>
              <p className='detail__runtime'>Runtime: {detail.runtime ? detail.runtime + 'min.' : 'Unknown'}</p>
              <ul className='detail__genres'>
                Genres:
                {detail.genres && detail.genres.length ? detail.genres.map((g, idx) => {
                  return <li key={idx} className='detail__genre'>{g}</li>
                }) : 'Unknown'}
              </ul>
              <p className='detail__director'>Director: {detail.director ? detail.director : 'Unknown'}</p>
              <p className='detail.actors'>Actors: {detail.actors ? detail.actors : 'Unknown'}</p>
              <p className='detail__plot'>{detail.plot}</p>
            </div>
            <div className='detail__poster'>
              <img src={detail.posterUrl} alt={detail.title} />
            </div>
          </div>
          <div className='detail__actions'>
            <Link to={'/'} className='btn btn--primary'>Back</Link>
            <Link to={`${match.url}/edit`} className='btn btn--secondary'>Edit</Link>
          </div>
        </section>
      )
    }
  }
}
