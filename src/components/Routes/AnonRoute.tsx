import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function AnonRoute({
  path,
  exact,
  component: Component,
  ...props
}: any) {
  const { authState } = useContext(AuthContext);
  if (authState.isLoggedIn) return <Redirect to="/user" />;

  return (
    <Route path={path} exact>
      <Component {...props} />
    </Route>
  );
}
