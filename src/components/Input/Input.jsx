import { Field } from 'formik'
import React from 'react'
import TextError from '../TextError/TextError'
import '../Input/input.css'
import { ErrorMessage } from 'formik';

export default function Input(props) {
    const {label, name, ...rest} = props
  return (
    <div className='form-content'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
    </div>

  )
}
