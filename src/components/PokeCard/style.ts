import styled from "styled-components";
import Card from 'react-bootstrap/Card';

export const StyledCard = styled(Card)`
width: 16rem;
height:55vh;
background: rgb(78,64,137);
border: groove 5px #FFD700;
box-shadow: 1px 1px 10px black;
@media (max-width: 400px) {
  width: 14rem;
}
@media (min-width: 1600px) {
  width: 25rem;
}
`
export const CardImg = styled.img`
background: radial-gradient(circle, rgba(255,255,242,1) 34%, rgba(255,255,235,1) 35%, rgba(78,64,137,1) 74%);
max-height: 100%;
min-height: 100%;
width: 100%;
`