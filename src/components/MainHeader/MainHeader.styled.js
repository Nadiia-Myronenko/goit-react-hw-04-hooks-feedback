import styled from "styled-components";
import logo from "./logo.png";

const Logo = styled.img`
  margin-right: 20px;
`;

const HeaderTitle = styled.h1`
  color: #8b4513;
  font-style: italic;
  margin-bottom: 50px;
  margin-top: 0;
`;

const HeaderLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export default function MainHeader() {
  return (
    <HeaderTitle>
      <HeaderLink href="#">
        <Logo src={logo} width="80" alt="logo cafe Espresso" />
        Coffee House Espresso
      </HeaderLink>
    </HeaderTitle>
  );
}
