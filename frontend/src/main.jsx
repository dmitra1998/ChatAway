import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

const CLIENT_ID = "914859224416-8q0imtts8gm5icd7m19jrvm3ora1ar2e.apps.googleusercontent.com"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);