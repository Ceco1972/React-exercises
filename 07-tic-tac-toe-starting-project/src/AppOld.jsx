//Използваме Lifting State Up, за да може активния играч да се предава като пропс към Gameboard компонента
import { useState } from 'react';
import Player from './components/Player';
// import NewPlayer from './components/NewPlayer';
import Gameboard from './components/GameboardOld';
import Log from './components/Log';
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer ==='X' ? 'O' : 'X');
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
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
