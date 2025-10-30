import Header from "./components/Header"
import UserInputLabel from "./components/UserInputLabel"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  const [investObject, setInvestObject] = useState({
    initialInvestment: '', 
    annualInvestment: '', 
    expectedReturn: '', 
    duration: '' 
  });

  const inputIsValid = investObject.duration >= 1;

  const handleInputChange = (identifier, value) => {
    setInvestObject(prevState => ({
      ...prevState,
      [identifier]: Number(value)
    }));
  };

  return (
    <div className='center'>
      <Header/>
      <UserInputLabel 
        investData={investObject}
        onValueChange={handleInputChange}
      />
      {!inputIsValid && <p>Please enter valid input values (duration must be at least 1 year).</p>}
      {inputIsValid && <Result investData={investObject}/>} 
    </div>
  )
}

export default App
