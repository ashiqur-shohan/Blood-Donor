import { Outlet } from "react-router-dom";
import Footer from "./components/Shared/Footer";
// import {Header} from "./components/Shared/Header";
import Navbar from "./components/Shared/Navbar";

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
