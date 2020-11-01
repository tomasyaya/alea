import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  padding: 20px;
  background-color: lightgray;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: #000;
  margin: 10px;
`;
