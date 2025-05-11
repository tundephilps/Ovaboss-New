// layouts/EcommerceLayout.jsx

import { Outlet } from "react-router-dom";
import CategoryNavbar from "../components/Ecommerce/layout/CategoryNavbar";
import CategoryNavbarMobile from "../components/Ecommerce/layout/CategoryNavbarMobile";
import Footer from "../components/Ecommerce/layout/Footer";
import Navbar from "../components/Ecommerce/layout/Navbar";

const EcommerceLayout = ({ children }) => (
  <>
    <Navbar />
    <CategoryNavbar />
    <CategoryNavbarMobile />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default EcommerceLayout;
