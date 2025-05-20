// layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardBCC/layout/Sidebar";
import Header from "../components/DashboardBCC/layout/Header";

const DashboardBCCLayout = ({ children }) => (
  <div className="flex min-h-screen">
    <Sidebar />
    <main className="flex-1  bg-gray-50">
      <Header />
      <Outlet />
    </main>
  </div>
);

export default DashboardBCCLayout;
