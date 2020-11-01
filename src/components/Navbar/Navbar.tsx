import React from "react";
import { LogoutBtn } from "../LogoutBtn/LogoutBtn";
import * as S from "./styles";

export function Navbar() {
  return (
    <S.Nav>
      <S.Link to="/users">Users</S.Link>
      <S.Link to="/profile">Profile</S.Link>
      <LogoutBtn />
    </S.Nav>
  );
}
