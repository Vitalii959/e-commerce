import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import App from "./app/App";

import "./shared/styles/reset.css";
import "./shared/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename='/e-commerce'>
      <App />
    </BrowserRouter>
  </StrictMode>
);
