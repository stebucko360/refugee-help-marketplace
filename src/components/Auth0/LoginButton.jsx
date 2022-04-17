import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./LoginButton.css";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="modulo">
      <div className="loginBox">
        <p className="welcomeMessage">Welcome to Manna Care</p>
        <div className="buttonContainer">
          <button className="loginButton" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
