import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout";
import IndexPage from "../pages/index";
import ErrorPage from "../pages/error";
import PrivacyPolicyPage from "../pages/privacy";
import BlogPage from "../pages/blog";
import ProductsPage from "../pages/products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Route>
      <Route path="privacy" element={<PrivacyPolicyPage />} />
    </Routes>
  );
}

export default App;
