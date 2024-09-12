import styled from "styled-components";

export const HeaderDiv = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  & a {
    color: #333;
  }

  & .login {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Img = styled.img`
  padding: 0.5rem 0;
`;

export const ImgLogin = styled.img`
  position: relative;
  top: -1px;
`;

