import React from 'react';
import { useState } from 'react';
import { Square } from './Square';

type tBoardProps = {
  squares: Array<string>;
  xIsNext: boolean;
  onPlay: (squares:string[])=>void
};

export default function Board(props:tBoardProps) {
  
  function handleClick(i: number) {
    if (props.squares[i] != '' || calculateWinner(props.squares)) {
      return;
    }
    const nextSquares = props.squares.slice();

    if (props.xIsNext) {
      nextSquares[i] = 'X';
    } else {nextSquares[i] = 'O';}
    props.onPlay(nextSquares)
    
  }
  let winner = calculateWinner(props.squares);
  let status: string;
  if (winner) {
    status = 'the winner is: ' + winner;
  } else {
    status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={props.squares[0]}
          onSquareClicked={() => handleClick(0)}
        />
        <Square
          value={props.squares[1]}
          onSquareClicked={() => handleClick(1)}
        />
        <Square
          value={props.squares[2]}
          onSquareClicked={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={props.squares[3]}
          onSquareClicked={() => handleClick(3)}
        />
        <Square
          value={props.squares[4]}
          onSquareClicked={() => handleClick(4)}
        />
        <Square
          value={props.squares[5]}
          onSquareClicked={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={props.squares[6]}
          onSquareClicked={() => handleClick(6)}
        />
        <Square
          value={props.squares[7]}
          onSquareClicked={() => handleClick(7)}
        />
        <Square
          value={props.squares[8]}
          onSquareClicked={() => handleClick(8)}
        />
      </div>
    </>
  );
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
