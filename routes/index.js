import express from "express";
import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ThemeProvider } from "react-jss";
import { Provider } from "react-redux";

import App from "../src/app";
import { store } from "../src/app/store";
import { theme } from "../src/app/theme";

const router = express.Router();

router.get("/", function (req, res) {
  const app = ReactDOMServer.renderToString(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    </ThemeProvider>
  );

  res.render("index", {
    app: app,
  });
});

export default router;
