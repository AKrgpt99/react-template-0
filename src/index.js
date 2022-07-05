import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import { Provider } from "react-redux";

import "./index.css";
import App from "./app";
import { store } from "./app/store";
import { theme } from "./app/theme";

ReactDOM.hydrate(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
