import styled from "styled-components";

export const Header = styled.div`
align-items: center;
background: whitesmoke;
border-radius: 3px;
box-shadow: 1px 1px 3px black;
display: flex;
height: 60px;
justify-content: space-between;
margin-top: 30px;
padding: 10px;
width: 35%;

@media (max-width: 1280px) {
  width: 60%;
}

@media (max-width: 680px) {
  width: 60%;
}

@media (max-width: 530px) {
  width: 60%;
}
`
export const ContainerHeader = styled.div`
align-items: center;
display: flex;
font-size: 23px;
font-weight: bold;
height: 60px;
justify-content: space-between;
width: 100%;
gap: 10px;

@media (max-width: 850px) {
  font-size: 17px;
}

@media (max-width: 670px) {
  font-size: 12px;
}

@media (max-width: 460px) {
  font-size: 10px;
}
@media (max-width: 410px) {
  font-size: 9px;
}
`
export const ContentHeader = styled.div`
align-items: center;
display: flex;
height: auto;
justify-content: center;
width: 25%;
`