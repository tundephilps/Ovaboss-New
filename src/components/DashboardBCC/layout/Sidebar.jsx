import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaWallet,
  FaFileInvoice,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";
import Logo from "../../../assets/Logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import Contain from "../../../assets/Container.svg";
import Contain2 from "../../../assets/Container2.svg";
import { FaCartShopping } from "react-icons/fa6";
import Contain3 from "../../../assets/Container3.svg";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import Power from "../../../assets/Power.svg";
import { useAppContext } from "../../../context/AppContext";
import useWallets from "../../../hooks/useWallets";
 

export const getMenuItems = (menuItems, businessAccounts) => {
  const includeBusinessAccount = ['/bccdashboard', '/businesses', '/pccdashboard'];
  if(businessAccounts.length) {
    return menuItems.filter(item => includeBusinessAccount.includes(item.path.toLowerCase()))
  }

  return menuItems;

}

// Logout Confirmation Modal Component
const LogoutModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-yellow-600 text-xl">
              <AiOutlineExclamationCircle />{" "}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
          Are you sure you want to log out?
        </h3>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ item, isCollapsed }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  const handleItemClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <div className="w-full text-xs">
      <Link to={item.path || "#"} className="block" onClick={handleItemClick}>
        <div className="flex items-center justify-between px-4 py-2 cursor-pointer  hover:bg-gray-700 text-white">
          <div className="flex items-center gap-2">
            <span className="text-[#CC9A06]">{item.icon}</span>
            {!isCollapsed && (
              <span className="text-[#9EA8B5]">{item.label}</span>
            )}
          </div>
          {hasChildren &&
            !isCollapsed &&
            (open ? (
              <BiChevronDown className="text-[#CC9A06]" />
            ) : (
              <BiChevronRight className="text-[#9EA8B5]" />
            ))}
        </div>
      </Link>
      {hasChildren && open && !isCollapsed && (
        <div className="pl-6">
          {item.children.map((child, idx) => (
            <SidebarItem key={idx} item={child} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { wallets } = useWallets();
  const { handleLogout, businessAccounts } = useAppContext();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    // Add your logout logic here
    // For example: dispatch logout action, clear tokens, redirect to login
    handleLogout();
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const allBCCWallets = wallets.bcc.map(item => ({ label: item.walletName, path: `/Wallets/${item.walletName}` }))

  const menuItems = [
  {
    icon: <img src={Contain} />,
    label: "BCC Dashboard",
    path: "/BCCDashboard",
  },
  {
    icon: <FaUser className="text-xl" />,
    label: "Business",
    path: "/Businesses",
    children: [
      { label: "All My Businesses", path: "/Business/All" },
      { label: "Add New Business", path: "/Business/AddNew" },
    ],
  },
  {
    icon: <img src={Contain2} />,
    label: "Orders",
    path: "/Orders",
    children: [
      { label: "All Orders", path: "/Orders" },
      { label: "Awaiting Payment", path: "/Orders/AwaitingPayment" },
      { label: "Pending Orders", path: "/Orders/PendingOrders" },
      { label: "Processing Orders", path: "/Orders/ProcessingOrders" },

      { label: "Dispatched Orders", path: "/Orders/DispatchedOrders" },
      { label: "Completed Orders", path: "/Orders/CompleteOrders" },
      { label: "Unfulfilled Orders", path: "/Orders/UnfulfilledOrders" },
      {
        label: "General Online Sales Invoice",
        path: "/Orders/OnlineSalesInvoice",
      },

      {
        label: "General Offline Sales Invoice",
        path: "/Orders/OfflineSalesInvoice",
      },
    ],
  },
  {
    icon: <FaWallet className="text-xl" />,
    label: "Goods",
    path: "/Goods",
    children: [
      { label: "All PickUp Locations", path: "/Goods/PickupLocations" },
      { label: "All Goods", path: "/Goods/AllGoods" },
      { label: "Promotion", path: "/Goods/Promotions" },
    ],
  },

  {
    icon: <FaMoneyBillWave className="text-xl" />,
    label: "Services",
    path: "/Services",
    children: [
      { label: "All Services", path: "/Services" },
      { label: "Add New Service", path: "/Services/AddNew" },
    ],
  },

  {
    icon: <FaMoneyBillWave className="text-xl" />,
    label: "Business Community",
    path: "/Business",
    children: [
      { label: "PMB", path: "/BusinessCommunity/PMB" },
      { label: "AQB", path: "/BusinessCommunity/AQB" },
    ],
  },

  {
    icon: <img src={Contain3} />,
    label: "Wallets/Accounts",
    path: "#",
    children: allBCCWallets,
  },

  {
    icon: <FaFileInvoice className="text-xl" />,
    label: "Reports",
    path: "/Reports",
    children: [
      {
        label: "General Reports",
        path: "/Reports/General",
        children: [
          { label: "General Report", path: "/Reports/GeneralReports" },
          { label: "MTR Order Report", path: "/Reports/MTRReports" },
          {
            label: "Goods Order Reports",
            path: "/Reports/GoodsOrder",
          },
          {
            label: "Service Order Reports",
            path: "/Reports/ServiceOrder",
          },
        ],
      },
      {
        label: "Payout Reports",
        path: "/Reports/Payout",
        children: [
          {
            label: "Wallet Transactions",
            path: "/Reports/WalletTransactions",
          },
          {
            label: "Earning Transactions",
            path: "/Reports/EarningTransactions",
          },
        ],
      },
      {
        label: "Invoice Report",
        path: "/Reports/invoice",
        children: [
          { label: "Online Invoice Report", path: "/Reports/OnlineInvoice" },
          { label: "Offline Invoice Report", path: "/Reports/OfflineInvoice" },
        ],
      },
    ],
  },

  {
    icon: <FaCartShopping className="text-xl" />,
    label: "BCC MTR",
    path: "/MTR",
    children: [
      { label: "Sales Receipt", path: "/BusinessCommunity/PMB" },
      { label: "Purchase Receipt", path: "/BusinessCommunity/AQB" },
    ],
  },
  {
    icon: <FaCartShopping className="text-xl" />,
    label: "Switch to PCC",
    path: "/PCCDashboard",
  },
];

  return (
    <>
      <div
        className={`${
          isCollapsed ? "w-16" : "w-1/5"
        } transition-all duration-300 lg:min-h-screen overflow-y-auto h-full lg:block hidden bg-gradient-to-b from-[#000000] to-[#121212] text-white shadow-lg flex flex-col`}
      >
        <div className="flex items-center justify-between gap-2 px-4 py-3 font-bold text-xl bg-gradient-to-b from-[#E8C000] to-[#FFD700] text-black">
          {!isCollapsed && (
            <Link to="/">
              <img src={Logo} className="h-8 w-28" />
            </Link>
          )}

          <RiMenu3Fill
            className={`text-white text-2xl cursor-pointer ${
              isCollapsed ? "mx-auto" : ""
            }`}
            onClick={toggleSidebar}
          />
        </div>

        {/* Main menu items */}
        <div className="flex flex-col h-[90vh] justify-between">
          <div className="flex flex-col gap-1 py-2 flex-1">
            {getMenuItems(menuItems, businessAccounts).map((item, idx) => (
              <SidebarItem key={idx} item={item} isCollapsed={isCollapsed} />
            ))}
          </div>

          {/* Logout button at the bottom */}
          <div className=" border-t border-gray-700 ">
            <div
              className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-gray-700 text-white text-xs"
              onClick={handleLogoutClick}
            >
              <span className="text-[#CC9A06]">
                <img src={Power} className="text-xl" />
              </span>
              {!isCollapsed && <span className="text-[#9EA8B5]">Logout</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </>
  );
};

export default Sidebar;
