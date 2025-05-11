// layouts/EcommerceLayout.jsx
import Navbar from "../components/BusinessService/layout/Navbar";

import Footer from "../components/BusinessService/layout/Footer";

import CategoryMenu from "../components/BusinessService/layout/CategoryMenu";
import { Outlet } from "react-router-dom";

const BusinessLayout = ({ children }) => (
  <>
    <Navbar />
    <CategoryMenu />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default BusinessLayout;
