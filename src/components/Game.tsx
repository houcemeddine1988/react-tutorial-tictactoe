import React from 'react';
import { useState } from 'react';
import Board from './Board';

type tGameState = {
  isNextPlayer: boolean;
  history: Array<Array<string>>;
};
export default function Game() {
  const [gameState, setGameState] = useState<tGameState>({
    isNextPlayer: true,
    history: [Array<string>(9).fill('')],
  });
  const currentSquares = gameState.history[gameState.history.length - 1];
  function handlePlay(nextSquares: string[]) {
    setGameState({
        isNextPlayer: !gameState.isNextPlayer,
        history:[...gameState.history, nextSquares]
        
    })
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={gameState.isNextPlayer}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}
