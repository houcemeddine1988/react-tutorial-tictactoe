import React from 'react'

type squareProps = {
  value: string;
  onSquareClicked: () => void;
};
export function Square(props: squareProps) {
  return (
    <button className="square" onClick={props.onSquareClicked}>
      {props.value}
    </button>
  );
}