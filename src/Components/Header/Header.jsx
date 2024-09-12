import React from "react";
import Dogs from "../../Assets/dogs.svg";
import Usuario from "../../Assets/usuario.svg";

import { HeaderDiv, Img, ImgLogin, Nav } from "./HeaderStyle";
import { Link } from "react-router-dom";
import { Container } from "../util/Container";

const Header = () => {
  return (
    <HeaderDiv>
      <Container>
        <Nav>
          <Link to="/" aria-label="Dogs - Home">
            <Img src={Dogs} alt="logo dogs header" />
          </Link>
          <Link to="/login" className="login">
            Login / Criar
            <ImgLogin src={Usuario} alt="Icone de Login" />
          </Link>
        </Nav>
      </Container>
    </HeaderDiv>
  );
};

export default Header;
