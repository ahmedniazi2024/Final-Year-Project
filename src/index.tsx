import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ConsumerVerify from "./App2";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    <ConsumerVerify />
  </React.StrictMode>
);
