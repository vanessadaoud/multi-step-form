import React, { useEffect, useState } from 'react';
import './options.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Options() {
  const [completedSteps, setCompletedSteps] = useState([]);
  const navigate = useNavigate();
  const currentUrl = useLocation().pathname;

  useEffect(() => {
    // Add the current step to the completed steps when the component mounts
    setCompletedSteps((prevSteps) => {
      if (!prevSteps.includes(currentUrl)) {
        return [...prevSteps, currentUrl];
      }
      return prevSteps;
    });
  }, [currentUrl]);

  return (
    <div className='options-container'>
      <div
        className={`option ${completedSteps.includes('/personal-info') ? 'completed' : ''}`}
        onClick={() => {
          navigate('/personal-info');
        }}
      >
        <div className={`circle ${completedSteps.includes('/personal-info') ? 'completed' : ''}`}>1</div>
        <div className='option-content'>
          <span>STEP 1</span>
          <span className='span'>YOUR INFO</span>
        </div>
      </div>
      <div
        className={`option ${completedSteps.includes('/select-plan') ? 'completed' : ''}`}
        onClick={() => {
          navigate('/select-plan');
        }}
      >
        <div className={`circle ${completedSteps.includes('/select-plan') ? 'completed' : ''}`}>2</div>
        <div className='option-content'>
          <span>STEP 2</span>
          <span className='span'>SELECT PLAN</span>
        </div>
      </div>
      <div
        className={`option ${completedSteps.includes('/add-ons') ? 'completed' : ''}`}
        onClick={() => {
          navigate('/add-ons');
        }}
      >
        <div className={`circle ${completedSteps.includes('/add-ons') ? 'completed' : ''}`}>3</div>
        <div className='option-content'>
          <span>STEP 3</span>
          <span className='span'>ADD-ONS</span>
        </div>
      </div>
      <div
        className={`option ${completedSteps.includes('/finishing') ? 'completed' : ''}`}
        onClick={() => {
          navigate('/finishing');
        }}
      >
        <div className={`circle ${completedSteps.includes('/finishing') ? 'completed' : ''}`}>4</div>
        <div className='option-content'>
          <span>STEP 4</span>
          <span className='span'>SUMMARY</span>
        </div>
      </div>
    </div>
  );
}








