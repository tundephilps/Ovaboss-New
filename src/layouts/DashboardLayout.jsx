// layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/layout/Sidebar";

const DashboardLayout = ({ children }) => (
  <div className="flex min-h-screen">
    <Sidebar />
    <main className="flex-1 p-4 bg-gray-50">
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;
