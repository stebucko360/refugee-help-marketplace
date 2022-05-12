import React from "react";
import "./LogoutButton.css";

export const LogoutButton = ({ setIsAuthenticated }) => {
  return (
    <button className="logout"
      onClick={() => {
        setIsAuthenticated(false);
      }}
    >
      Log Out
    </button>
  );
};
