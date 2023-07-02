import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export const PLay = () => {
  const player = localStorage.getItem("player");
  const computer = player === "O" ? "X" : "O";
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerType, setPlayerType] = useState(player);

  //computer move
  useEffect(() => {
    //check if there is a winner first
    const winner = checkWinner(board);
    if (winner===player) {
      console.log('u win' );
      return ;
    }else if (winner===computer) {
    console.log('u lose');
    return;
    }
    if (playerType === computer) {
      //functiopn to seach for empty squares
      const searchFreeSquare = () => {
        var freeSquares = [];
        for (let index = 0; index < board.length; index++) {
          if (board[index] === null) {
            freeSquares.push(index);
          }
        }
        const randomIndex = Math.floor(Math.random() * freeSquares.length);
        return freeSquares[randomIndex];
      };
      //add the computer move to the board
      const randomEmptySquare = searchFreeSquare();
      const newBoard = [...board];
      newBoard[randomEmptySquare] = computer;
      setBoard(newBoard);
      setPlayerType(player);
    }
    
  }, [playerType, board, computer, player]);


  //player move
  const handleNewMove = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = playerType;
      setBoard(newBoard);
      setPlayerType(computer);
    }
  };

  //search for a winner
  function checkWinner(board) {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  //Check if the user didn't choose his player (x or o)
  if (localStorage.length < 1) {
    return <Navigate to="/" />;
  }

  const square = (index) => {
    return (
      <span
        className="border text-center board"
        onClick={() => handleNewMove(index)}
      >
        {board[index] ?? " "}
      </span>
    );
  };
  return (
    <Container className="text-center">
      {/* <Row></Row> */}
      <div className="d-flex justify-content-center">
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
      </div>
    </Container>
  );
};
