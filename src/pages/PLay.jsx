import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export const PLay = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  useEffect(() => {
    if (player === "O") {
      const randomEmptySquare = searchFreeSquare();
      console.log(randomEmptySquare);
      const newBoard = [...board];
        newBoard[randomEmptySquare] = 'O';
        setBoard(newBoard);
        setPlayer("X");
      }
  }, [player,board]);
  //Check if the user didn't choose his player (x or o)
  if (localStorage.length>0) {
    return <Navigate to='/'/>
  }
  const square = (index) => {
    return (
      <span className="border text-center" onClick={() => handleNewMove(index)}>
        {board[index]??' '}
      </span>
    );
  };
  const handleNewMove = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer( "O");
    }
  };
  const searchFreeSquare = () => {
    var freeSquares = new Array([]);
    for (let index = 0; index < board.length; index++) {
      if (board[index] === null) {
        freeSquares.push(index);
      }
    }
    const randomIndex = Math.floor(Math.random() * freeSquares.length);
    return freeSquares[randomIndex];
  };

  return (
    <Container className="text-center">
      {/* <Row></Row> */}
      <Row>
        <div className="grid-container">
          {square(0)}
          {square(1)}
          {square(2)}
        </div>
        <div className="grid-container">
          {square(3)}
          {square(4)}
          {square(5)}
        </div>
        <div className="grid-container">
          {square(6)}
          {square(7)}
          {square(8)}
        </div>
      </Row>
    </Container>
  );
};
