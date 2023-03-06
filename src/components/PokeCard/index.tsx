import Card from 'react-bootstrap/Card';
import { CardImg, StyledCard } from "./style";
import { useContext } from 'react';
import { GlobalContext } from '../../context/WeatherContext';
import { Spinner } from 'react-bootstrap';

export function PokeCard() {

  const { infoPoke, namePoke, idPoke, loading } = useContext(GlobalContext) as { handlePokemon: () => void, namePoke: string, infoPoke: any, idPoke: string, loading: boolean };
  return (
    <StyledCard>
      <div style={{ maxHeight: "100%", minHeight: "70%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {loading &&
          <div style={{ width: "100%", height: "100%", position: "absolute", background: "black", display: "flex", justifyContent: "center", alignItems: "center", opacity:"0.6" }}>
            <Spinner variant='light' animation="border" style={{  }} />
          </div>
        }
        <CardImg src={infoPoke} alt='Imagem no pokemon' />
      </div>
      <Card.Body style={{ maxHeight: "30%", background: "#FFF", borderRadius: "20px 20px 0px 0px ", borderTop: "4px ridge #FFD700" }}>
        <Card.Title style={{ display: "flex", justifyContent: "space-between" }}>
          <span> {namePoke} </span> <span> #{idPoke} </span>
        </Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
}