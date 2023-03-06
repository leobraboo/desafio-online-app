import styled from "styled-components";

export const Header = styled.div`
align-items: center;
background: whitesmoke;
border-radius: 3px;
box-shadow: 1px 1px 3px black;
display: flex;
font-size: 23px;
font-weight: bold;
height: 60px;
justify-content: space-between;
margin-top: 30px;
padding: 20px;
width: 35%;

@media (max-width: 680px) {
  font-size: 17px;
}

@media (max-width: 530px) {
  font-size: 12px;
  height: 30px;
}
`