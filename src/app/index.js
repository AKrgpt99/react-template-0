import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import Layout from "../components/layout";
import IndexPage from "../pages/index";
import PrivacyPolicyPage from "../pages/privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IndexPage />} />
        </Route>
        <Route path="privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { store };

export default App;
