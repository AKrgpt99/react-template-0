import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { store } from "./store";
import { theme } from "./theme";
import Layout from "../components/layout";
import IndexPage from "../pages/index";
import ErrorPage from "../pages/error";
import PrivacyPolicyPage from "../pages/privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route
            path="*"
            element={<Navigate to="error" state={{ code: 404 }} />}
          />
          <Route path="error" element={<ErrorPage />} />
        </Route>
        <Route path="privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { store, theme };

export default App;
