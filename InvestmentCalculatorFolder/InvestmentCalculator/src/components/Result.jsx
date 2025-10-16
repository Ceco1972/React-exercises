import { calculateInvestmentResults } from "../util/investment";

export default function Result({ initialInvestment, annualInvestment, expectedReturn, duration }) {
  
  const investmentProfile = {
  initialInvestment: initialInvestment,       // Initial amount in currency units
  annualInvestment: annualInvestment,         // Amount added each year
  expectedReturn: expectedReturn,           // Annual return rate (e.g., 7%)
  duration: duration                   // Investment duration in years
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
              <td>{data.valueEndOfYear.toFixed(0)}</td>
              <td>{data.interest.toFixed(0)}</td>
              <td>{totalInterest.toFixed(0)}</td>
              <td>{(data.valueEndOfYear - totalInterest).toFixed(0)}</td>
            </tr>
          );
        })}

        
      </tbody>
    </table>
  );
}
