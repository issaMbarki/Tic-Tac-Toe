import { Col, Container, Modal, Row } from "react-bootstrap";
import { PlayerType } from "./PlayerType";

function VerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          choose your player 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <PlayerType title={"Player 1"} symbol={"x"} />
            </Col>
            <Col>
              <PlayerType title={"Player 2"} symbol={"o"} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
export default VerticallyCenteredModal;
