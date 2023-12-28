import React, { useState } from 'react';
import './switchBtn.css';

export default function SwitchBtn({planType, onChange}) {

    const handleToggle = () => {
       onChange(planType === 'monthly' ? 'yearly' : 'monthly');
    };

  return (
    <div className='switch-container'>
        <span className={planType === 'monthly' ? 'active' : ''}>Monthly</span>
        <label className='switch'>
{/* The checked attribute is used in the <input> element of type checkbox. In the context of a checkbox input, the checked attribute determines whether the checkbox should be initially checked or not. */}
            <input type='checkbox' checked={planType === 'yearly'} onChange={handleToggle}/>
            <span className='slider round'></span>
        </label>
        <span className={planType === 'yearly' ? 'active' : ''}> Yearly </span>
    </div>
  );
}
