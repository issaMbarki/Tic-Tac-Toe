import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const PlayerType = ({title,symbol}) => {
  const navigate =useNavigate();
  const handleClick =()=>{
    localStorage.setItem('player', symbol);
    navigate('/play');
  }
  return (
    <Card style={{ width: '18rem' }}>
        {/* https://picsum.photos/200 */}
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
       <Button variant='primary' onClick={handleClick}>
PLay
       </Button>
      </Card.Body>
    </Card>
  )
}
