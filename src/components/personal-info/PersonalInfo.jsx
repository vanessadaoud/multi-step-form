import React, { useState } from 'react'
import './personalInfo.css';
import FormikControl from '../FormikControl';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import Buttons from '../buttons/Buttons';


export default function PersonalInfo(props) {

const navigate = useNavigate();

  const initialValues = {
    name : '',
    email : '',
    phone : ''
}

const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string().required('required'),
    phone: Yup.string().required('required')
})

const onSubmit = (values) => {
    // console.log('form data', values)
    // console.log('saved data', JSON.parse(JSON.stringify(values)))
    props.onSubmit(values);
    // navigate(props.nextPath);
}


  return (
    <div className='container'>
      <div className='personal'>
            <h1>PERSONAL INFO</h1>
            <p>Please provide your name, email adress, and phone number.</p>

            {/* <form>
                <div className='form-content'>
                    <label>Name</label>
                    <input type='text'/>
                </div>
                <div className='form-content'>
                    <label>Email Adress</label>
                    <input type='email'/>
                </div>
                <div className='form-content'>
                    <label>Phone Number</label>
                    <input type='text'/>
                </div>

                <button>Next Step</button>
            </form> */}
           <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
          {(formik) => (
            <Form>
              <FormikControl 
                  control='input' 
                  name='name' 
                  label='Name'  
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
              />

              <FormikControl 
                  control='input' 
                  type='email' 
                  label='Email' 
                  name='email'  
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email} 
              />

              <FormikControl 
                  control='input' 
                  label='Phone Number' 
                  name='phone'  
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone} 
              />

              {/* <button type='submit' >Next Step</button> */}
              <Buttons nextPath={props.nextPath} showGoBack={false} showNextStep={true} onSubmit={onSubmit}/>
            </Form>
          )}
        </Formik>
      </div>
      
    </div>
  )
}
