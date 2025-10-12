export default function Log ({turns}) {
  
    return (
<ol id='log'> 
{turns.map(turn => <li key = {`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected row {turn.square.row + 1}, col {turn.square.col + 1}
            </li>
            )}
</ol>
        

    // <ol id='log'>
    // {turns.map((turn, index) => {
    //   const {square, player} = turn;
    //   const {row, col} = square;
    //   return (
    //     <li key={index}>
    //       Player {player} selected row {row + 1}, col {col + 1}
    //     </li>
    //   );
    // })}
    // </ol>
    
  );
}