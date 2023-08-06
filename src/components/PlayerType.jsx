import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Xplayer from '../assets/x.png';
import Oplayer from '../assets/o.png';

export const PlayerType = ({ title, symbol }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("player", symbol);
    navigate("/play");
  };
  return (
    <Card className="position-relative h-100"onClick={handleClick} >
      <Card.Img className="symbol" variant="top" src={symbol==='O'?Oplayer:Xplayer}/>
      <Card.Body>
        <Button variant="primary" >
        {title}
        </Button>
      </Card.Body>
    </Card>
  );
};
