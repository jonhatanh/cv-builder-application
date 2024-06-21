import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

// '!' to indicate that you're sure that the value is never null
const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
