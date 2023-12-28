//             {/* <form>
//                     <div className='plans'>
//                         <input type='radio' name='plan1'></input>
//                         <div className='circle'>
//                             <FontAwesomeIcon icon={faGamepad} />
//                         </div>
//                         <div className='plans-content'>
//                             <h1>Arcade</h1>
//                             <span>$9/mo</span>
//                         </div>
//                     </div>
                
//                     <div className='plans'>
//                     <input type='radio' name='plan1'></input>
//                         <div className='circle'>
//                             <FontAwesomeIcon icon={faGamepad} />
//                         </div>
//                         <div className='plans-content'>
//                             <h1>Advanced</h1>
//                             <span>$12/mo</span>
//                         </div>
//                     </div>

//                     <div className='plans'>
//                     <input type='radio' name='plan1'></input>
//                         <div className='circle'>
//                             <FontAwesomeIcon icon={faGamepad} />
//                         </div>
//                         <div className='plans-content'>
//                             <h1>Pro</h1>
//                             <span>$15/mo</span>
//                         </div>
//                     </div>
               
//             </form> */}

import React, { useState, useEffect } from 'react';
import Options from '../options/Options';
import './selectPlan.css';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import PlansCards from '../plans-cards/PlansCards';
import SwitchBtn from '../switch-btn/SwitchBtn';
import Buttons from '../buttons/Buttons';
import { useNavigate } from 'react-router-dom';

export default function SelectPlan(props) {

const {onSelect} = props;
const [selectedOption, setSelectedOption] = useState(null);
const [planType, setPlanType] = useState("monthly");

  const handleSelect = (selectedTitle, newPlanType, newPrice) => {
    setSelectedOption({ title: selectedTitle, planType, price:newPrice });
    setPlanType(newPlanType);
  };

  //on change passing to parent then from parent to finishing
  //props are only passed from parent to child not child to child
  useEffect(() => {
    props.onSelect(selectedOption, planType)
  }, [selectedOption, planType])
  

  const handleSwitchChange = (newPlanType) => {
    setPlanType(newPlanType);
    //setSelectedOption(null); // Clear selected option when switching plan types
  };

  return (
    <div className='container'>
      <div className='plan'>
        <h1>SELECT YOUR PLAN</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <div className='cards'>
          {planType === 'monthly' ? (
            <>
                <PlansCards icon={faGamepad} title='Arcade' price='9' circleColor='rgb(241,178,138)' onSelect={() => handleSelect('Arcade', 'monthly','9')} selected={selectedOption} planType='monthly'/>
                <PlansCards icon={faGamepad} title='Advanced' price='12' circleColor='hsl(354, 74%, 64%)' onSelect={() => handleSelect('Advanced', 'monthly','12')} selected={selectedOption} planType='monthly'/>
                <PlansCards icon={faGamepad} title='Pro' price='15' circleColor='hsl(243, 92%, 64%)' onSelect={() => handleSelect('Pro', 'monthly','15')} selected={selectedOption} planType='monthly'/>
            </>
          ) :  
            <>
                <PlansCards icon={faGamepad} title='Arcade' price='100' circleColor='rgb(241,178,138)' onSelect={() => handleSelect('Arcade', 'monthly','100')} selected={selectedOption} planType='yearly'/>
                <PlansCards icon={faGamepad} title='Advanced' price='130' circleColor='hsl(354, 74%, 64%)' onSelect={() => handleSelect('Advanced', 'monthly','130')} selected={selectedOption} planType='yearly'/>
                <PlansCards icon={faGamepad} title='Pro' price='170' circleColor='hsl(243, 92%, 64%)' onSelect={() => handleSelect('Pro', 'monthly','170')} selected={selectedOption} planType='yearly'/>
            </>
        }
        </div>
        <SwitchBtn planType={planType} onChange={handleSwitchChange} />
        <Buttons nextPath={props.nextPath} backPath={props.backPath} showGoBack={true} showNextStep={true} />
      </div>
    </div>
  );
}
