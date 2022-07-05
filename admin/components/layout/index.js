import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../header";
import Footer from "../footer";
import { fetchColorScheme } from "../../features/dark-mode/darkModeSlice";

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColorScheme());
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
