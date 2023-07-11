import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-7a343lhn7wlm8usz.au.auth0.com"
    clientId="IRlLdneseR6y5NOjsT5fcnMCCSgawd2h"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
  >
    <Router>
      <App />
    </Router>
    </Auth0Provider>
  </React.StrictMode>
);
