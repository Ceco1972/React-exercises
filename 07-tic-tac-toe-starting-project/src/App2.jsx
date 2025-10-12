//Използваме Lifting State Up, за да може активния играч да се предава като пропс към Gameboard компонента
import { useState } from 'react';
import Player from './components/Player';
// import NewPlayer from './components/NewPlayer';
import Gameboard from './components/Gameboard';
import Log from './components/Log';
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer(curActivePlayer => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
        let currentPlayer = 'X';

        // if (prevTurns.length > 0  && prevTurns[0].player === 'X') {
        //   currentPlayer = 'O';
        // }
        if (prevTurns.length > 0)
          { 
            prevTurns[0].player === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
        }

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
