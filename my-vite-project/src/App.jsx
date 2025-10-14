//Използваме Lifting State Up, за да може активния играч да се предава като пропс към Gameboard компонента
//Създаваме функция, която извлича активния играч от масива с ходове, в App2.jsx използваме още един state за това.
//Работи с Gameboard3.jsx
import { useState } from 'react';
import Player from './components/Player';
// import NewPlayer from './components/NewPlayer';
import Gameboard from './components/Gameboard';
// import Log from './components/Log';
import { WINNING_COMBINATIONS } from './components/winning-combinations';
import GameOver from './components/GameOver';
import Log from './components/Log';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0) {
    gameTurns[0].player === 'X' ? (currentPlayer = 'O') : (currentPlayer = 'X');
  }
  return currentPlayer;
}

function derivedGameboard(gameTurns) {
  //this below is called 'deriving state'
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
  const { square, player } = turn;
  const { row, col } = square;

  gameBoard[row][col] = player;
}
return gameBoard;

}

function derivedWinner(gameBoard, players) {
  let winner = null;
    for (const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]; 
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
        break;
      }
    }
    return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  const gameBoard = derivedGameboard(gameTurns);

  const winner = derivedWinner(gameBoard, players);
 const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers =>  {return {
      ...prevPlayers,
      [symbol]: newName
    };
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          {/* <NewPlayer initialName='Player 111' symbol='X' /> */}
          <Player
            initialName={PLAYERS.X}
            symbol='X'
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol='O'
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw)  && <GameOver winner={winner} onRestart={handleRestart} />}
        <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
        <Log turns={gameTurns} />
      </div>
      {/* <Log turns={gameTurns} /> */}
    </main>
  );
}

export default App;
