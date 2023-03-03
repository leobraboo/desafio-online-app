import { FaCog } from "react-icons/fa";
import { ContainerNav, ImgLogo } from "./style";
import { Button, Form, Stack } from 'react-bootstrap';
export function Navbar() {
  return (
    <ContainerNav>
      <ImgLogo src="https://enviabybus.com.br/assets/images/ebb-logo.svg" alt="logo empresa desafio" />
      <div>
        <Stack direction="horizontal" gap={3}>
          <Form.Control style={{ width:"400px" }} className="me-auto" placeholder="Digite o nome da cidade..." />
          <Button style={{ background:"#4e4089" }}>Pesquisar</Button>
        </Stack>
      </div>
      <FaCog size={25} />
    </ContainerNav>
  )
}