import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const PlayerType = ({title,symbol}) => {
  return (
    <Card style={{ width: '18rem' }}>
        {/* https://picsum.photos/200 */}
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to='/play'>
        Play
        </Link>
      </Card.Body>
    </Card>
  )
}
