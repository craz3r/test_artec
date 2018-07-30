import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './containers/movies';
import MovieDetailContainer from './containers/movie-detail';
import MovieAddContainer from './containers/movie-add';
import MovieEditContainer from './containers/movie-edit';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='header'>
          <div className='container'>
            <h1 className='header__title'>Welcome to Movies App</h1>
            <nav className='header__nav'>
              <ul>
                <li><Link to='/' className='header__link'>List of movies</Link></li>
                <li><Link to='/add' className='header__link'>Add new movie</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className='content'>
          <div className='container'>
          <Switch>
            <Route exact path='/' component={MoviesContainer} />
            <Route path='/add' component={MovieAddContainer} />
            <Route exact path='/movies/:id' component={MovieDetailContainer} />
            <Route path='/movies/:id/edit' component={MovieEditContainer} />
          </Switch>
          </div>
        </main>
        <footer className='footer'>
          <div className='container'>
            <p className='footer__copyright'>
              Created by Nikita Sigow
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
