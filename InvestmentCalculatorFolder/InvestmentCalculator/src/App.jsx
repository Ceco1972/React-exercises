import Header from "./components/Header"
import UserInputLabel from "./components/UserInputLabel"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  const [initialInvestment, setInitialInvestment] = useState();
  const [annualInvestment, setAnnualInvestment] = useState();
  const [expectedReturn, setExpectedReturn] = useState();
  const [duration, setDuration] = useState();  

  return (
    <div className = 'center'>
      <Header/>
      <UserInputLabel 
        initialInvestment={initialInvestment}
        onInitialInvestmentChange={setInitialInvestment}
        annualInvestment={annualInvestment}
        onAnnualInvestmentChange={setAnnualInvestment}
        expectedReturn={expectedReturn}
        onExpectedReturnChange={setExpectedReturn}
        duration={duration}
        onDurationChange={setDuration}  
      />
      <Result initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}/>
    </div>
  )
}

export default App
