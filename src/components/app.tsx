import React from 'react';
import { useState } from 'react';

type boardState = {
  squares: Array<string>;
  xIsNext: boolean;
};
type squareProps = {
  value: string;
  onSquareClicked: () => void;
};
function Square(props: squareProps) {
  return (
    <button className="square" onClick={props.onSquareClicked}>
      {props.value}
    </button>
  );
}

export default function Board() {
  const [boardstate, setboardstate] = useState<boardState>({
    squares: Array<string>(9).fill(''),
    xIsNext: true,
  });
  function handleClick(i: number) {
    if (boardstate.squares[i] != '' || calculateWinner(boardstate.squares)) {
      return;
    }
    const nextSquares = boardstate.squares.slice();

    if (boardstate.xIsNext) {
      nextSquares[i] = 'X';
    } else nextSquares[i] = 'O';
    setboardstate({ squares: nextSquares, xIsNext: !boardstate.xIsNext });
  }
  let winner = calculateWinner(boardstate.squares);
  let status: string;
  if (winner) {
    status = 'the winner is: ' + winner;
  } else {
    status = 'Next player: ' + (boardstate.xIsNext ? 'X' : 'O');
  }
  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square
          value={boardstate.squares[0]}
          onSquareClicked={() => handleClick(0)}
        />
        <Square
          value={boardstate.squares[1]}
          onSquareClicked={() => handleClick(1)}
        />
        <Square
          value={boardstate.squares[2]}
          onSquareClicked={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={boardstate.squares[3]}
          onSquareClicked={() => handleClick(3)}
        />
        <Square
          value={boardstate.squares[4]}
          onSquareClicked={() => handleClick(4)}
        />
        <Square
          value={boardstate.squares[5]}
          onSquareClicked={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={boardstate.squares[6]}
          onSquareClicked={() => handleClick(6)}
        />
        <Square
          value={boardstate.squares[7]}
          onSquareClicked={() => handleClick(7)}
        />
        <Square
          value={boardstate.squares[8]}
          onSquareClicked={() => handleClick(8)}
        />
      </div>
    </>
  );
}

function calculateWinner(squares: any) {
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
