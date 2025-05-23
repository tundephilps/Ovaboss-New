// layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardPCC/layout/Sidebar";
import Header from "../components/DashboardPCC/layout/Header";

const DashboardPCCLayout = ({ children }) => (
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

export default DashboardPCCLayout;
