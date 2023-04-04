import React from 'react';
import { useState } from 'react';
import Board from './Board';

type tGameState = {
  isNextPlayer: boolean;
  history: Array<Array<string>>;
  currentMove: number
};
export default function Game() {
  const [gameState, setGameState] = useState<tGameState>({
    isNextPlayer: true,
    history: [Array<string>(9).fill('')],
    currentMove:0
  });
  const currentSquares = gameState.history[gameState.currentMove];
  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...gameState.history.slice(0, gameState.currentMove+1), nextSquares]
    setGameState({
        isNextPlayer: !gameState.isNextPlayer,
        history:nextHistory,
        currentMove: nextHistory.length -1
        
    })
  }
  function jumpTo(nextMove:number){
    setGameState({
        isNextPlayer: nextMove % 2 === 0,
        history: gameState.history,
        currentMove: nextMove
    })
  }
  const moves = gameState.history.map((squares, move)=>{
    let description;
    if(move>0){
        description = 'Go to move : ' + move;
    }else{
        description = 'Go to game start';
    }
    return(
        <li key={move}>
            <button onClick={()=>jumpTo(move)}>{description}</button>
        </li>
    )
  })
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
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
