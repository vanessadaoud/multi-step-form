import React from 'react'
import './checkbox.css'

export default function CheckBox({title, detail, price, onSelect}) {
  return (
    <div className='check-box-container'>
        <div className='check-box-input'>
            <input type="checkbox" onChange={() => onSelect(title,price)}/>
            <span className='custom-checkbox'></span>
        </div>
        <div className='check-box-content'>
          <h1>{title}</h1>
          <span>{detail}</span>
        </div>
        <div className='price'>
            +${price}/mo
        </div>
    </div>
  )
}
