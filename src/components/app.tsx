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
    const nextSquares = boardstate.squares.slice();
    if (boardstate.squares[i] === '') {
      if (boardstate.xIsNext) {
        nextSquares[i] = 'X';
      } else nextSquares[i] = 'O';
      setboardstate({ squares: nextSquares, xIsNext: !boardstate.xIsNext });
    }
  }
  return (
    <>
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
