import React, { Component } from 'react';
import MoviesContainer from './containers/movies';
import MovieDetailContainer from './containers/movie-detail';
import MovieAddContainer from './containers/movie-add';
import MovieEditContainer from './containers/movie-edit';
import { NotificationContainer } from 'react-notifications';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import 'react-notifications/lib/notifications.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='header'>
          <div className='container'>
            <p className='header__title'>Welcome to Movies App</p>
            <nav className='header__nav'>
              <ul>
                <li><NavLink to='/' exact activeClassName='header__link--active' className='header__link'>List of movies</NavLink></li>
                <li><NavLink to='/add' activeClassName='header__link--active' className='header__link'>Add new movie</NavLink></li>
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
        <NotificationContainer />
      </div>
    );
  }
}

export default App;
