import React from 'react';
import './finishing.css';
import Buttons from '../buttons/Buttons';
import { Link } from 'react-router-dom';

export default function Finishing(props) {

    const {selectedOption, selectedAddOn, formValues} = props;
    
    const calculateTotalPrice = () => {
        const planPrice = selectedOption ? selectedOption.price : 0;
        //uses reduce on the selectedAddOn array to calculate the total price of all selected add-ons.
        const addOnsPrice = selectedAddOn?.reduce((total, addOn) => total + parseInt(addOn.price), 0);
        return Number(planPrice) + Number(addOnsPrice);
    }

    const totalPrice = calculateTotalPrice();

  return (
    <div className='container'>
        <div className="finishing-container">
            <h1>Finishing up</h1>
            <span>Double-check everything looks OK before confirming.</span>

            <div className="chosen-info">
                <div className="chosen-plan">
                    <div className="plan-name">
                    {selectedOption && (
                        <>
                            <h1>{selectedOption.title + "(" + selectedOption.planType + ")"}</h1>
                            <Link to='/select-plan' className='change-btn'>Change</Link>
                        </>
                        )}
                    </div>
                    
                    <div className="plan-price">
                        <span>${selectedOption ? selectedOption.price : '0'}/mo</span>
                    </div>       
                </div>

                <div className="chosen-addOns">
                    <table>
                    <tbody>
                        {selectedAddOn?.map((addOn, index) => (
                        <tr key={index}>
                            <td className='addOn-name'>{addOn.title}</td>
                            <td className='addOn-price'>+${addOn.price}/mo</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>  

            </div>

            <div className="total-price">
                <h1>Total (per month)</h1>
                <span className='total'>+${totalPrice}/mo</span>
            </div>

{/* <div>{formValues && <p>hello, {formValues.name}</p>}</div> */}
            <Buttons nextPath={props.nextPath} backPath={props.backPath} showGoBack={true} showNextStep={false} />
        </div>
    </div>
  )
}
