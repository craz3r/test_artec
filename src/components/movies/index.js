import React, { Component } from 'react';
import Movie from './item';
import './style.css';

export default class MoviesList extends Component {
  renderList = () => {
    const { movies } = this.props;

    if (!movies.length) {
      return <p className='msg'>List is empty</p>
    } else {
      return (
        <section className='movies'>
          <h1 className='movies__title'>Movies</h1>
          <ul className='movies__list'>
            {movies.map(m => {
              return <li key={m.id}><Movie movie={m} moreHandler={this.props.setCurrentMovie} match={this.props.match}/></li>
            })}
          </ul>
        </section>
      )
    }
  }

  renderMsg = () => {
    const { loadState } = this.props;

    const msgs = {
      failed: <p className='msg'>'Loading failed'</p>,
      requested: <p className='msg'>'Loading ...'</p>,
      none: null
    }

    return msgs[loadState];
  }

  render() {
    const { loadState } = this.props;

    return loadState === 'successed' ? this.renderList() : this.renderMsg();
  }
}
