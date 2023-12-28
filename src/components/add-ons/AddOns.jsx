import './addOns.css'
import Options from '../options/Options'
import CheckBox from '../check-box/CheckBox'
import Buttons from '../buttons/Buttons'
import { useEffect, useState } from 'react'

//doesn't work like select plan because here the checkbox is customized so it doesn't have an event listener that is why i have to add onChange in CheckBox

export default function AddOns(props) {

  const {onSelect} = props
  const [selectedAddOn, setSelectedAddOn] = useState([]);
  

  const handleAddOnSelect = (titleAddOn, addOnPrice) => {
    const newAddOn = { title: titleAddOn, price: addOnPrice };
    setSelectedAddOn((prevAddOns) => [...prevAddOns, newAddOn]);
}


  useEffect(() => {
    console.log(selectedAddOn)
    props.onSelect(selectedAddOn)
  }, [selectedAddOn])

  return (
    <div className='container'>
        <div className="add-ons">
            <h1>Pick add-ons</h1>
            <span className='addSpan'>Add-ons help enhance your gaming experience.</span>

        <div className='check-boxes'>
            <CheckBox title='Online service' detail='Access to multiplayer games' price='1' onSelect={handleAddOnSelect} selected={selectedAddOn}/>
            <CheckBox title='Larger storage' detail='Extra 1TB of cloud save' price='2' onSelect={handleAddOnSelect} selected={selectedAddOn}/>
            <CheckBox title='Customizable Profile' detail='Custom theme on your profile' price='2' onSelect={ handleAddOnSelect} selected={selectedAddOn}/>
        </div>
            

        <Buttons nextPath={props.nextPath} backPath={props.backPath} showGoBack={true} showNextStep={true}/>

        </div>
    </div>
  )
}
