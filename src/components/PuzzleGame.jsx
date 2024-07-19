import React, { useState, useEffect } from 'react';
import Tile from './Tile';

const PuzzleGame = () => {
  const [grid, setGrid] = useState([]);
  const [mines, setMines] = useState([]);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const letters = ['A', 'B', 'C'];
    const newGrid = Array(3).fill().map(() => 
      Array(3).fill().map(() => letters[Math.floor(Math.random() * 3)])
    );
    setGrid(newGrid);

    const newMines = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (Math.random() < 0.3) { // 30% chance of a mine
          newMines.push([i, j]);
        }
      }
    }
    setMines(newMines);
  };

  const hasMine = (row, col) => {
    return mines.some(([r, c]) => r === row && c === col);
  };

  const hasAdjacentA = (row, col) => {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    return directions.some(([dr, dc]) => {
      const newRow = row + dr;
      const newCol = col + dc;
      return (
        newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 3 &&
        grid[newRow][newCol] === 'A'
      );
    });
  };

  const shouldShake = (letter, row, col) => {
    if (letter === 'A') {
      return grid.some((row, i) => 
        row.some((cell, j) => cell === 'A' && hasMine(i, j))
      );
    }
    if (letter === 'B') return false;
    if (letter === 'C') return hasAdjacentA(row, col);
    return hasMine(row, col);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Puzzle Game</h1>
      <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-md">
        {grid.map((row, i) => 
          row.map((letter, j) => (
            <Tile 
              key={`${i}-${j}`} 
              letter={letter} 
              shake={shouldShake(letter, i, j)}
              hasMine={hasMine(i, j)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PuzzleGame;