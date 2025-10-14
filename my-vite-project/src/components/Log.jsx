export default function Log({turns}) {
  return (
    // <section id='log'>      
    //     <h2>Game Log</h2>
    //     <ol>
    //       {turns.map((turn, index) => (
    //         <li key={index}>            

    //             {turn.player} placed on row {turn.square.row + 1}, col {turn.square.col + 1}
    //         </li>
    //       ))}
    //     </ol>   
    // </section>
<ol id='log'> 
{turns.map(turn => <li key = {`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected row {turn.square.row + 1}, col {turn.square.col + 1}
            </li>
            )}
</ol> 

);
}