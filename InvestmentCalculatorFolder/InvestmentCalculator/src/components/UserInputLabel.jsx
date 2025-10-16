import { useState } from "react"

export default function UserInputLabel({ initialInvestment, onInitialInvestmentChange }) {
    // const [initialInvestment, setInitialInvestment] = useState(initialInvestment);
    // function handleInitialIvestmentChange(event) {  
    //     setInitialInvestment(event.target.value);
    // } 
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number" 
            value={initialInvestment}
            onChange={(e) => onInitialInvestmentChange(Number(e.target.value))}
            required 
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" required />
        </p>
      </div>
    </div>
  );
}