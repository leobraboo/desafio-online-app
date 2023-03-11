import { useContext } from "react";
import { GlobalContext } from "../../context/WeatherContext";
import { FaCog } from "react-icons/fa";
import { ContainerNav, ImgLogo, StackStyled } from "./style";
import { Button, Form, Stack } from 'react-bootstrap';

export function Navbar() {
  const { handleCity, handleWeather } = useContext(GlobalContext) as { handleCity: () => void, handleWeather: () => void };

  return (
    <ContainerNav>
      <ImgLogo src="https://enviabybus.com.br/assets/images/ebb-logo.svg" alt="logo empresa desafio" />
        <StackStyled direction="horizontal" gap={3}>
          <Form.Control onChange={handleCity} className="me-auto" style={{ height: "30px" }} placeholder="Digite o nome da cidade..." />
          <Button size="sm" onClick={handleWeather} style={{ background: "#4e4089", height: "30px", display: "flex", alignItems: "center" }}> <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/beadde1f-9c02-40de-b431-1284049f99d8/d75zlzl-f0498e82-15c8-4e6f-8176-837cb5878921.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlYWRkZTFmLTljMDItNDBkZS1iNDMxLTEyODQwNDlmOTlkOFwvZDc1emx6bC1mMDQ5OGU4Mi0xNWM4LTRlNmYtODE3Ni04MzdjYjU4Nzg5MjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MWT_QCuEcXVleNajtCpsOjraq6E0FM66iS7EY69dXCE" alt="icon search" /> Pesquisar  </Button>
        </StackStyled>
    </ContainerNav>
  )
}