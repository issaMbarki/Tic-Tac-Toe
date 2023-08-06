import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { WinnerModal } from "../components/WinnerModal";
import { CheckWinner } from "../utils/checkWinner";
import Xsymbol from "../assets/x.png";
import Osymbol from "../assets/o.png";
import { searchFreeSquare } from "../utils/searchFreeSquare";
import { NavBar } from "../components/NavBar";
import move1 from "../assets/move1.mp3";
import move2 from "../assets/move2.mp3";

export const PLay = () => {
  const player = localStorage.getItem("player");
  const computer = player === "O" ? "X" : "O";
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  //computer move
  useEffect(() => {
    //check if there is a winner first
    const winner = CheckWinner(board);
    if (winner) {
      setWinner(winner);
      setModalShow(true);
      return;
    }
    
    //add the computer move to the board
    if (currentPlayer === computer) {
      //search for an empty square
    const randomEmptySquare = searchFreeSquare(board);
    //check if there is no empty square (draw)
    if (randomEmptySquare === undefined) {
      setModalShow(true);
      return;
    }
      const newBoard = [...board];
      newBoard[randomEmptySquare] = computer;
      // Delay for 0.7 seconds
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      delay(700).then(() => {
        setBoard(newBoard);
        if (JSON.parse(localStorage.getItem("sound"))) {
          const sound1 = new Audio(move1);
          sound1.play();
        }
        setCurrentPlayer(player);
      });
    }
  }, [currentPlayer, board, computer, player, winner]);

  //player move
  const handleNewMove = (index) => {
    if (!winner && currentPlayer === player) {
      const newBoard = [...board];
      if (newBoard[index] === null) {
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        if (JSON.parse(localStorage.getItem("sound"))) {
          const sound2 = new Audio(move2);
          sound2.play();
        }
        setCurrentPlayer(computer);
      }
    }
  };

  //Check if the user didn't choose his player (x or o)
  if (!localStorage.getItem("player")) {
    return <Navigate to="/" />;
  }

  const square = (index) => {
    return (
      <div
        className="border text-center board"
        onClick={() => handleNewMove(index)}
      >
        {board[index] === "X" && <img src={Xsymbol} alt="symbol" />}
        {board[index] === "O" && <img src={Osymbol} alt="symbol" />}
      </div>
    );
  };
  return (
    <Container className="d-flex flex-column align-items-center justify-content-between vh-100">
      <div className="mt-3">
        <Row>
          {square(0)}
          {square(1)}
          {square(2)}
        </Row>
        <Row>
          {square(3)}
          {square(4)}
          {square(5)}
        </Row>
        <Row>
          {square(6)}
          {square(7)}
          {square(8)}
        </Row>
      </div>
      {modalShow && (
        <WinnerModal
          playAgain={() => {
            setBoard(Array(9).fill(null));
            setWinner(null);
            setCurrentPlayer("X");
          }}
          player={player}
          computer={computer}
          winner={winner}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
      <NavBar
        playAgain={() => {
          setBoard(Array(9).fill(null));
          setWinner(null);
          setCurrentPlayer("X");
        }}
      />
    </Container>
  );
};
