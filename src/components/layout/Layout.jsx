import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AuthUserProvider from "../../contexts/AuthUserContext";

function Layout() {
  return (
    <>
      <AuthUserProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AuthUserProvider>
    </>
  );
}

export default Layout;
