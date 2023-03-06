import { Form, Stack } from "react-bootstrap";
import styled from "styled-components";

export const ContainerNav = styled.div`
display: flex;
flex-direction: row;
background: #DCDCDC;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 5px;
gap: 20px;

@media (max-width: 768px) {
  flex-direction: row;
}
`

export const ImgLogo = styled.img`
width: 200px;
height: 50px;
@media (max-width: 768px) {
  width: 100px;
}
@media (max-width: 470px) {
  width: 60px;
}
`
export const StackStyled = styled(Stack)`
width: 600px;
height: 50px;

@media (max-width: 855px) {
  width: 500px;
}
@media (max-width: 768px) {
  width: 300px;
}
@media (min-width: 651px) and (max-width: 767px) {
  width: 400px;
}
@media (max-width: 650px) {
  width: 400px;
}
@media (max-width: 555px) {
  width: 300px;
}
@media (max-width: 400px) {
  width: 240px;
}
`
