import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function useLogout() {
  const { push } = useHistory();
  const { actions } = useContext(AuthContext);
  function handleLogout() {
    localStorage.removeItem("user");
    actions.resetUser();
    push("/");
  }
  return handleLogout;
}
