import { Container, Row } from "react-bootstrap";

export const PLay = () => {
  return (
    <Container>
      <Row></Row>
      <Row>
        <div className="grid-container">
          <span className="b-right b-bottom"></span>
          <span className="b-right b-bottom b-left"></span>
          <span className="b-bottom b-left"></span>
        </div>
        <div className="grid-container">
          <span></span>
          <span className="b-right b-left"></span>
          <span></span>
        </div>
        <div className="grid-container">
          <span className="b-right b-top"></span>
          <span className="b-right b-left b-top"></span>
          <span className="b-left b-top"></span>
        </div>
      </Row>
    </Container>
  );
};
