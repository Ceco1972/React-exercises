import { calculateInvestmentResults } from "../util/investment";

export default function Result({ investData }) {
  const results = calculateInvestmentResults(investData);

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
          //totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - investData.initialInvestment; - this works too
          const investedCapital = 
            investData.initialInvestment + 
            (data.year * investData.annualInvestment);
          // const investedCapital =
          // data.valueEndOfYear - totalInterest; - this works too
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.valueEndOfYear.toFixed(2)}</td>
              <td>{data.interest.toFixed(2)}</td>
              <td>{totalInterest.toFixed(2)}</td>
              <td>{investedCapital.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
