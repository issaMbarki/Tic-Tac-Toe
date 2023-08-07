import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const WinnerModal = (props) => {
  const { winner, player, computer, playAgain, onHide, show } = props;
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/tic-tac-toe");
  };
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {!winner &&<>Draw. <i className="fa-regular fa-face-meh-blank"></i></>}
          {winner === player &&<>You won. <i className="fa-solid fa-award"></i></>}
          {winner === computer &&<>You lost. <i className="fa-regular fa-face-frown"></i></>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!winner && <>No clear winner this time. It's a draw!</>}
        {winner === player && <>Well done! You're the winner!</>}
        {winner === computer && <>Keep going, you'll get there!</>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={backHome}>
          Back to home
        </Button>
        <Button
          variant="success"
          onClick={() => {
            onHide();
            playAgain();
          }}
        >
          Play again
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
