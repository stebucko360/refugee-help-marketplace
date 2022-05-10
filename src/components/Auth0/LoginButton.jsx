import React from "react";
import "./LoginButton.css";

export const LoginButton = ({ setIsAuthenticated }) => {
  return (
    <div className="modulo">
      <div className="loginBox">
        <p className="welcomeMessage">Welcome to Manna Care</p>
        <div className="buttonContainer">
          <button
            className="loginButton"
            onClick={() => {
              setIsAuthenticated(true);
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
