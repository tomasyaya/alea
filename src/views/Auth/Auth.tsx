import React, { useContext } from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./styles";

export function Auth() {
  const { handleSetUser } = useContext(AuthContext);

  return (
    <S.Container>
      <S.Header>Welcome</S.Header>
      <AuthForm handleSubmit={handleSetUser} />
    </S.Container>
  );
}
