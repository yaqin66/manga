/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="p-3">
            <Outlet/>
      </div>
  );
};

export default Layout;
