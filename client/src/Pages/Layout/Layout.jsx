import React from "react";
import { Sidebar } from "./Sidebar";
import { HeaderContent } from "./HeaderContent";
import "./Layout.css";

const Layout = () => (
  <>
    <input type="checkbox" id="nav-toggle" />
    <Sidebar />
    <HeaderContent />
  </>
);

export default Layout;
