import React, { ReactElement } from "react";
import { useAuth } from "../hooks/useAuth";
import { registerUser } from "../service/api";

interface AuthProps {
  children: ReactElement;
}

interface User {
  email: string;
  password: string;
}

interface AuthState {
  email: string;
  isLoggedIn: boolean;
}

interface Actions {
  setUser: (email: string) => void;
  resetUser: () => void;
}

interface ContextState {
  handleSetUser: (user: User) => void;
  authState: AuthState;
  actions: Actions;
}

export const AuthContext = React.createContext({} as ContextState);

export function AuthProvider({ children }: AuthProps) {
  const [authState, actions] = useAuth();

  async function handleSetUser(user: User) {
    try {
      const { email } = await registerUser(user);
      actions.setUser(email);
      saveUserInLocalStorage(email);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <AuthContext.Provider value={{ authState, handleSetUser, actions }}>
      {children}
    </AuthContext.Provider>
  );
}

function saveUserInLocalStorage(email: string) {
  const loggeduser = {
    email,
    isLoggedIn: true,
  };
  localStorage.setItem("user", JSON.stringify(loggeduser));
}
