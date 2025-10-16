import Header from "./components/Header"
import UserInputLabel from "./components/UserInputLabel"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);

  return (
    <div className = 'center'>
      <Header/>
      <UserInputLabel 
        initialInvestment={initialInvestment}
        onInitialInvestmentChange={setInitialInvestment}
      />
      <Result initialInvestment={initialInvestment} />
    </div>
  )
}

export default App
