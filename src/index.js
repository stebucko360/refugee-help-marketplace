import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-xfstw302.us.auth0.com"
    clientId="tlFjMRyRORnwLM3EB0bFIMLR2UyOwyFm"
    redirectUri="http://localhost:3000/home"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
