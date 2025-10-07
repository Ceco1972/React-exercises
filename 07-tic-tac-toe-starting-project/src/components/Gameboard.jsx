import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard(prevGameboard => {
      prevGameboard[rowIndex][colIndex] = 'X';
      const updatedBoard = [
        ...prevGameboard.map(innerArray => [...innerArray]),
      ];
      //const updatedBoard = prevGameBoard.map(row => [...row]);
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
