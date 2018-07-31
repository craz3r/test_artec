import React from 'react';

export const renderField = ({
  input,
  label,
  id,
  type,
  name,
  required,
  placeholder,
  meta: { touched, error }
}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} name={name} id={id} required={required} />
    {touched &&
      ((error && <span className='valid-error'>{error}</span>))}
    <label htmlFor={id}>{label}</label>
  </div>
)

export const renderTextarea = ({
  input,
  label,
  id,
  name,
  required,
  placeholder,
  meta: { touched, error }
})  => (
  <div>
    <textarea {...input} placeholder={placeholder} id={id} name={name} required={required} />
    {touched &&
      ((error && <span className='valid-error'>{error}</span>))}
    <label htmlFor={id}>{label}</label>
  </div>
)
