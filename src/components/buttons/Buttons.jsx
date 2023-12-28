import React from 'react';
import './buttons.css';
import { useNavigate } from 'react-router-dom';

export default function Buttons(props) {
  const {selectedOption, selectedAddOn, showGoBack, showNextStep} = props;

  const navigate = useNavigate();

  const goNext = () => {
    navigate(props.nextPath);
  }
  const goBack = () => {
    navigate(props.backPath);
  }

  return (
    <div className="btn-container">
        {showGoBack && <button className='back' onClick={goBack}>Go Back</button>}
        {showNextStep && <button className='next' onClick={goNext} selectedOption={selectedOption} selectedAddOn={selectedAddOn}>Next Step</button>}
    </div>
  )
}
