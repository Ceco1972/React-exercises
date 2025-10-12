//Използваме Lifting State Up, за да може активния играч да се предава като пропс към Gameboard компонента
//Създаваме функция, която извлича активния играч от масива с ходове, в App2.jsx използваме още един state за това.
import { useState } from 'react';
import Player from './components/Player';
// import NewPlayer from './components/NewPlayer';
import Gameboard from './components/Gameboard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';  
    if (gameTurns.length > 0) {
        gameTurns[0].player === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
    }
    return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  for (const combination of WINNING_COMBINATIONS){
    
  }
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);  
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          {/* <NewPlayer initialName='Player 111' symbol='X' /> */}
          <Player
            initialName='Player 1'
            symbol='X'
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName='Player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        <Gameboard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns = {gameTurns} />
    </main>
  );
}

export default App;
