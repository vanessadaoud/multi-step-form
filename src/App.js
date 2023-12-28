import './App.css';
import Options from './components/options/Options';
import PersonalInfo from './components/personal-info/PersonalInfo';
import SelectPlan from './components/select-plan/SelectPlan';
import AddOns from './components/add-ons/AddOns';
import Finishing from './components/finishing/Finishing';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate} from 'react-router-dom';


function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAddOn, setSelectedAddOn] = useState(null);
  const [formValues, setFormValues] = useState(null)

  const handleSelect = (selectedOption) => {
    //console.log(selectedOption);
    setSelectedOption(selectedOption)
  };

  const handleAddOnSelect = (selectedAddOn) => {
   // console.log(selectedAddOn)
    setSelectedAddOn(selectedAddOn)
  }

  const handleForm = (formValues) => {
   // console.log(formValues)
    setFormValues(formValues)
  }


  return (
    <Router>
      <div className='main-container'>
        <div className='container1'>
          <Options/>
          {/* {currentPage === 1 && <PersonalInfo/>}
          {currentPage === 2 && <SelectPlan/> }
          {currentPage === 3 && <AddOns/>}
          {currentPage === 4 && <Finishing/>} */}
      
              <Routes>
                <Route path='/' element={<Navigate to='/personal-info' replace/>}/>   {/* to have personal info open by default */}
                <Route path="/personal-info" element={<PersonalInfo onSubmit={handleForm} nextPath="/select-plan"  />} />
                <Route path="/select-plan" element={ <SelectPlan onSelect={handleSelect} nextPath="/add-ons" backPath="/personal-info" />}/>
                <Route path="/add-ons" element={<AddOns onSelect={handleAddOnSelect} nextPath="/finishing" backPath="/select-plan" />} />
                <Route path="/finishing" element={<Finishing backPath="/add-ons" selectedOption={selectedOption} selectedAddOn={selectedAddOn} formValues={formValues} />} />
              </Routes>

        </div>
      </div>
  </Router>
  );
}

export default App;
