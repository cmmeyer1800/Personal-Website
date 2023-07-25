import { Outlet } from "react-router-dom";

import Nav from "./Nav.js"

const Layout = () => {
  return (
    <div>
        <Nav />

        <Outlet />
    </div>
  )
};

export default Layout;