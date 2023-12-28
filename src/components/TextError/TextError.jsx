import React from 'react'
import './error.css'
export default function TextError(props) {
  return (
    <div className='error'>
        {props.children}
    </div>
  )
}
