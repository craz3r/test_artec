import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField, renderTextarea } from '../shared/fields';
import { NotificationManager } from 'react-notifications';
import { validateYear, validateText, validateRuntime } from '../../helpers/validators';
import './style.scss';

class MovieAdd extends Component {
  addMovie = (values) => {
    this.props.addMovie(values);
    this.props.reset();
    NotificationManager.info('The movie was added!');
  }

  render() {
    const { genres } = this.props;
    return (
      <section className='add'>
        <h1 className='add__title'>Add new movie</h1>
        <form className='add__form' onSubmit={this.props.handleSubmit(this.addMovie)}>
          <div className='field title'>
            <Field type='text' component='input' name='title' id='title' required={true} validate={validateText} placeholder='Enter title' label='Title' />
          </div>
          <div className='field year'>
            <Field type='number' component={renderField} name='year' id='year' validate={validateYear} placeholder='Enter year' label='Year' />
          </div>
          <div className='field runtime'>
            <Field type='number' component={renderField} name='runtime' id='runtime' validate={validateRuntime} placeholder='Enter runtime' label='Runtime' />
          </div>
          <div className='field genres'>
            <Field component='select' name='genres' id='genres' multiple>
              {
                genres.map((g, idx) => {
                  return <option key={idx} value={g}>{g}</option>
                })
              }
            </Field>
            <label htmlFor='genres'>Genres</label>
          </div>
          <div className='field director'>
            <Field type='text' component={renderField} name='director' id='director' placeholder='Enter director name' label='Director' />
          </div>
          <div className='field actors'>
            <Field type='text' component={renderField} name='actors' id='actors' placeholder='Enter actors' label='Actors' />
          </div>
          <div className='field plot'>
            <Field component={renderTextarea} name='plot' id='plot' required={true} validate={validateText} placeholder='Enter movie description' />
          </div>
          <div className='field posterUrl'>
            <Field type='url' component={renderField} name='posterUrl' id='posterUrl' required={true} validate={validateText} placeholder='Enter poster url' label='Poster' />
          </div>
          <div className='field submit'>
            <button type='submit' disabled={this.props.pristine} className='btn btn--primary'>Add</button>
          </div>
        </form>
      </section>
    )
  }
}

export default reduxForm({
  form: 'addMovie',
})(MovieAdd);
