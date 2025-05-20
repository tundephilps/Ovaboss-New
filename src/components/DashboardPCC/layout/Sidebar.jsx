import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaWallet,
  FaFileInvoice,
  FaMoneyBillWave,
} from "react-icons/fa";
import Logo from "../../../assets/Logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import Contain from "../../../assets/Container.svg";
import Contain2 from "../../../assets/Container2.svg";
import { FaCartShopping } from "react-icons/fa6";
import Contain3 from "../../../assets/Container3.svg";

const menuItems = [
  {
    icon: <img src={Contain} />,
    label: "PCC Dashboard",
    path: "/PCCDashboard",
  },
  { icon: <FaUser className="text-xl" />, label: "Profile", path: "/profile" },
  {
    icon: <img src={Contain2} />,
    label: "My Community",
    path: "/community",
    children: [
      { label: "PCM", path: "/community/pcm" },
      { label: "AQM", path: "/community/aqm" },
    ],
  },
  {
    icon: <FaWallet className="text-xl" />,
    label: "Wallets/Accounts",
    path: "/wallets",
    children: [
      { label: "LAA", path: "/wallets/laa" },
      { label: "SIGN ON", path: "/wallets/sign-on" },
      { label: "BUY ON", path: "/wallets/buy-on" },
    ],
  },
  {
    icon: <FaFileInvoice className="text-xl" />,
    label: "Reports",
    path: "/reports",
    children: [
      {
        label: "General Reports",
        path: "/reports/general",
        children: [
          { label: "MTR Order Report", path: "/reports/general/mtr-order" },
          {
            label: "Goods Order Reports",
            path: "/reports/general/goods-order",
          },
          {
            label: "Service Order Reports",
            path: "/reports/general/service-order",
          },
        ],
      },
      {
        label: "Payout Reports",
        path: "/reports/payout",
        children: [
          {
            label: "Wallet Transactions",
            path: "/reports/payout/wallet-transactions",
          },
          {
            label: "Earning Transactions",
            path: "/reports/payout/earning-transactions",
          },
        ],
      },
      {
        label: "Invoice Report",
        path: "/reports/invoice",
        children: [
          { label: "Online Invoice Report", path: "/reports/invoice/online" },
          { label: "Offline Invoice Report", path: "/reports/invoice/offline" },
        ],
      },
    ],
  },
  { icon: <FaMoneyBillWave className="text-xl" />, label: "MTR", path: "/mtr" },
  { icon: <img src={Contain3} />, label: "Switch to BCC", path: "/switch-bcc" },
  {
    icon: <FaCartShopping className="text-xl" />,
    label: "Back to Store",
    path: "/store",
  },
];

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
    <div className="w-full">
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

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-1/5"
      } transition-all duration-300 lg:min-h-screen  h-full lg:block hidden bg-gradient-to-b from-[#000000] to-[#121212] text-white shadow-lg`}
    >
      <div className="flex items-center justify-between   gap-2 px-4 py-3 font-bold text-xl bg-gradient-to-b from-[#E8C000] to-[#FFD700] text-black">
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
      <div className="flex flex-col gap-1 py-2">
        {menuItems.map((item, idx) => (
          <SidebarItem key={idx} item={item} isCollapsed={isCollapsed} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
