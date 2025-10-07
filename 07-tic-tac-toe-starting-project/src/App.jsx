import React from 'react';
import Player from './components/Player';
// import NewPlayer from './components/NewPlayer';
import Gameboard from './components/Gameboard';

function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          {/* <NewPlayer initialName='Player 111' symbol='X' /> */}
          <Player initialName='Player 1' symbol='X'  / >
          <Player initialName='Player 2' symbol='O'  / >
        </ol>
        <Gameboard />
      </div>
    </main>
  );
}

export default App;
