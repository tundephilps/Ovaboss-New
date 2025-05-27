// layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardBCC/layout/Sidebar";
import Header from "../components/DashboardBCC/layout/Header";

const DashboardBCCLayout = ({ children }) => (
  <div className="inline-flex w-full h-[100vh] overflow-y-hidden">
    <Sidebar />
    <main className="w-full">
      <Header />
      <div className="overflow-y-auto h-screen">
        <Outlet />
      </div>
    </main>
  </div>
);

export default DashboardBCCLayout;
