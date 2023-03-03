import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function PokeCard() {
  return (
    <Card style={{ width: '18rem', height:"50vh" }}>
      <Card.Img variant="top" src="https://enviabybus.com.br/assets/images/ebb-logo.svg" />
      <Card.Body>
        <Card.Title>Nome do pokemon</Card.Title>
        <Card.Text>
          informações do pokemon
        </Card.Text>
      </Card.Body>
    </Card>
  );
}