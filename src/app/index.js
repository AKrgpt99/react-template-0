import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { store } from "./store";
import { theme } from "./theme";
import Layout from "../components/layout";
import IndexPage from "../pages/index";
import ErrorPage from "../pages/error";
import PrivacyPolicyPage from "../pages/privacy";
import BlogPage from "../pages/blog";
import ProductsPage from "../pages/products";
import { fetchTheme } from "../features/theme/themeSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTheme());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="*" element={<ErrorPage code={404} />} />
        </Route>
        <Route path="privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { store, theme };

export default App;
