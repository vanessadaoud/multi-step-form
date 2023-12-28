import React, { useState } from 'react'
import './planscards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function PlansCards({icon, title, price, circleColor, planType, onSelect, selected}) {

    const handleSelect = () => {
        onSelect(title, planType); // Notify parent component about the selection change
    }

  return (
    <div className='card'>
        <form>
            <div className='plans-container'>
                <input type='radio' name='plan' checked={selected && selected.title === title} onChange={handleSelect}></input>
                <div className={`plans  ${selected && selected.title === title ? 'selected' : ''} ${planType}`}>
                    <div className='circle' style={{ backgroundColor: circleColor }}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <div className='plans-content'>
                        <h1>{title}</h1>
                        <span>${price}/{planType === 'yearly' ? 'yr' : 'mo'}</span>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
