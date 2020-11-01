export interface AuthState {
  email: string;
  isLoggedIn: boolean;
}

export interface AuthAction<P> {
  type: string;
  payload?: P;
}

export const SET_USER = "SET_USER";
export const RESET_USER = "RESET_USER";

export function buildInistialAuthState() {
  const savedUser = JSON.parse(localStorage.getItem("user") as string);
  const defaultState = {
    email: "",
    isLoggedIn: false,
  };
  return savedUser || defaultState;
}

export function authReducer(
  state: AuthState,
  { type, payload }: AuthAction<AuthState>
) {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
      };
    case RESET_USER:
      return {
        email: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
