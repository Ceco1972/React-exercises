import { calculateInvestmentResults } from "../util/investment";

export default function Result({ initialInvestment }) {
  
  const investmentProfile = {
  initialInvestment: initialInvestment,       // Initial amount in currency units
  annualInvestment: 5000,         // Amount added each year
  expectedReturn: 7,           // Annual return rate (e.g., 7%)
  duration: 4                   // Investment duration in years
};
  const results = calculateInvestmentResults(investmentProfile);
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        
        {results.map((data) => {
          totalInterest += data.interest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.valueEndOfYear.toFixed(2)}</td>
              <td>{data.interest.toFixed(2)}</td>
              <td>{totalInterest.toFixed(2)}</td>
              <td>{(data.valueEndOfYear - totalInterest).toFixed(2)}</td>
            </tr>
          );
        })}

        
      </tbody>
    </table>
  );
}
