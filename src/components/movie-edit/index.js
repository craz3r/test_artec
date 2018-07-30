import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import './style.css';

const renderField = ({
  input,
  label,
  id,
  type,
  placeholder
}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} id={id} />
    <label htmlFor={id}>{label}</label>
  </div>
)

class MovieEdit extends Component {
  editMovie = (values) => {
    this.props.editMovie(values);
    this.props.reset();
    this.props.history.push('/');
  }

  render() {
    const { genres } = this.props;
    return (
      <section className='edit'>
        <h1 className='add__title'>Edit</h1>
        <form className='add__form' onSubmit={this.props.handleSubmit(this.editMovie)}>
          <div className='field title'>
            <Field type='text' component={renderField} required name='title' id='title' placeholder='Enter title' label='Title' />
          </div>
          <div className='field year'>
            <Field type='number' component={renderField} name='year' id='year' placeholder='Enter year' label='Year' />
          </div>
          <div className='field runtime'>
            <Field type='number' component={renderField} name='runtime' id='runtime' placeholder='Enter runtime' label='Runtime' />
          </div>
          <div className='field genres'>
            <Field component='select' name='genres' id='genres' multiple>
              <option>Choose genres</option>
              {
                genres.map((g, idx) => {
                  return <option key={idx} value={g}>{g}</option>
                })
              }
            </Field>
          </div>
          <div className='field director'>
            <Field type='text' component={renderField} name='director' id='director' placeholder='Enter director name' label='Director' />
          </div>
          <div className='field actors'>
            <Field type='text' component={renderField} name='actors' id='actors' placeholder='Enter actors' label='Actors' />
          </div>
          <div className='field plot'>
            <Field type='text' component='textarea' required name='plot' id='plot' />
            <label htmlFor='plot'>Plot</label>
          </div>
          <div className='field posterUrl'>
            <Field type='url' component={renderField} required name='posterUrl' id='posterUrl' placeholder='Enter url address' label='Poster' />
          </div>
          <div className='field submit'>
            <button type='submit' className='btn btn--primary'>Save</button>
            <button type='button' className='btn btn--secondary' onClick={this.props.reset}>Cancel</button>
          </div>
        </form>
      </section>
    )
  }
}

export default reduxForm({
  form: 'editMovie'
})(MovieEdit);
