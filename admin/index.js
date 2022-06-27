import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-jss";

import "./index.css";
import App, { store, theme } from "./app";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
