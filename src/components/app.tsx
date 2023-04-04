import React from 'react';
type squareProps = {
  value: string;
};
function Square(props: squareProps) {
  function handleClick() {
    console.log('clicked !');
  }
  return (
    <button className="square" onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="board-row">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
    </>
  );
}
