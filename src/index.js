import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import {ContextProvider} from './Context'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>

);
