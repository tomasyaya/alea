import React from "react";
import { useLogout } from "../../hooks/useLogout";

export function LogoutBtn() {
  const handleLogout = useLogout();
  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}
