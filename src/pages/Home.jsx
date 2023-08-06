import { Button, Container, Row } from "react-bootstrap";
import homePic from "../assets/home.svg";
import { useState } from "react";
import VerticallyCenteredModal from "../components/VerticallyCenteredModal";

function Home() {
    const [modalShow, setModalShow] = useState(false);
  return (
    <Container className="text-center my-5">
      <Row>
        <h2 className="home-header text-white mb-5">
          Welcome to the ultimate Tic Tac Toe game!
        </h2>
      </Row>
      <Row>
        <img src={homePic} alt="home" className="homeImage " />
      </Row>
      <Row>
        <p className="text-white mt-5">
          Can you beat the computer and become the ultimate Tic Tac Toe
          champion? Let's find out!
        </p>
      </Row>
      <Row>
        <Button variant="primary" className="mt-5" onClick={() => setModalShow(true)}>Play</Button>
        <VerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Row>
    </Container>
  );
}

export default Home;