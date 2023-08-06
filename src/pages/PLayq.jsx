import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { WinnerModal } from "../components/WinnerModal";
import { CheckWinner } from "../utils/CheckWinner";

export const PLay = () => {
  const player = localStorage.getItem("player");
  const computer = player === "O" ? "X" : "O";
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWiner] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  //computer move
  useEffect(() => {
    //check if there is a winner first
    if (winner) {
      setModalShow(true);
      return;
    }
    if (currentPlayer === computer) {
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
      setWiner(CheckWinner(newBoard));
      setCurrentPlayer(player);
    }
   
   
  }, [currentPlayer, board, computer, player,winner]);

  //player move
  const handleNewMove = (index) => {
    if (winner) {
      return;
    }
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(computer);
    }
  };

  
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
      <WinnerModal playAgain={()=>{setBoard(Array(9).fill(null));setWiner(null)}}  player={player} winner={winner} show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};
