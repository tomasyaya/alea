import React, { BaseSyntheticEvent, useState } from "react";
import * as S from "./styles";

interface AuthState {
  email: string;
  password: string;
}

interface AuthFormProps {
  handleSubmit: (state: AuthState) => void;
}

const initialState = {
  email: "",
  password: "",
};

export function AuthForm({ handleSubmit }: AuthFormProps) {
  const [state, setState] = useState(initialState);

  function handleChange({ target }: BaseSyntheticEvent) {
    setState((state) => ({ ...state, [target.name]: target.value }));
  }

  function onSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    handleSubmit(state);
  }

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Label htmlFor="email">Email</S.Label>
      <S.Input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <S.Label htmlFor="password">Password</S.Label>
      <S.Input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <S.Button type="submit">Submit</S.Button>
    </S.Form>
  );
}
