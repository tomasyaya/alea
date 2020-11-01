import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useUser() {
  const { authState } = useContext(AuthContext);
  return [authState];
}
