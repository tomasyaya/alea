import { useReducer, Dispatch, useMemo, ReducerWithoutAction } from "react";
import {
  AuthState,
  AuthAction,
  SET_USER,
  RESET_USER,
  buildInistialAuthState,
  authReducer,
} from "../reducers/authReducer";

export function useAuth() {
  const [state, dispatch] = useReducer(
    authReducer as ReducerWithoutAction<any>,
    buildInistialAuthState()
  );
  const actions = useMemo(() => actionsCreator(dispatch), [dispatch]);
  return [state, actions];
}

function actionsCreator(dispatch: Dispatch<AuthAction<AuthState>>) {
  return {
    setUser: (user: AuthState) => {
      dispatch({ type: SET_USER, payload: user });
    },
    resetUser: () => {
      dispatch({ type: RESET_USER });
    },
  };
}
