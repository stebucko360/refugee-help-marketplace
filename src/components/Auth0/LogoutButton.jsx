import React from "react";

export const LogoutButton = ({ setIsAuthenticated }) => {
  return (
    <button
      onClick={() => {
        setIsAuthenticated(false);
      }}
    >
      Log Out
    </button>
  );
};
