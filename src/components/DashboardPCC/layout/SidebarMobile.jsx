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
  { icon: <FaUser className="text-xl" />, label: "Profile", path: "/Profile" },
  {
    icon: <img src={Contain2} />,
    label: "My Community",
    path: "/community",
    children: [
      { label: "PCM", path: "/Community/PCM" },
      { label: "AQM", path: "/Community/AQM" },
    ],
  },
  {
    icon: <FaWallet className="text-xl" />,
    label: "Wallets/Accounts",
    path: "/wallets",
    children: [
      { label: "LAA", path: "/Wallets/LAA" },
      { label: "SIGN ON", path: "/Wallets/SignOn" },
      { label: "BUY ON", path: "/Wallets/BuyOn" },
    ],
  },
  {
    icon: <FaFileInvoice className="text-xl" />,
    label: "Reports",
    path: "/GeneralReports",
    children: [
      {
        label: "General Reports",
        path: "/Reports",
        children: [
          { label: "General Report", path: "/Reports/GeneralReport" },
          {
            label: "MTR Order Report",
            path: "/Reports/GeneralReport/MTR",
          },
          {
            label: "Goods Order Reports",
            path: "/Reports/GeneralReport/GoodsOrderReport",
          },
          {
            label: "Service Order Reports",
            path: "/Reports/GeneralReport/ServiceOrderReport",
          },
        ],
      },
      {
        label: "Payout Reports",
        path: "/reports/payout",
        children: [
          {
            label: "Wallet Transactions",
            path: "/Reports/Payout/WalletTransactions",
          },
          {
            label: "Earning Transactions",
            path: "/Reports/Payout/EarningTransactions",
          },
        ],
      },
      {
        label: "Invoice Report",
        path: "/Reports/invoice",
        children: [
          { label: "Online Invoice Report", path: "/Reports/Invoice/Online" },
          { label: "Offline Invoice Report", path: "/Reports/Invoice/Offline" },
        ],
      },
    ],
  },
  { icon: <FaMoneyBillWave className="text-xl" />, label: "MTR", path: "/MTR" },
  {
    icon: <img src={Contain3} />,
    label: "Switch to BCC",
    path: "/BCCDashboard",
  },
  {
    icon: <FaCartShopping className="text-xl" />,
    label: "Back to Store",
    path: "/",
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
    <div className="w-full text-xs ">
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

const SidebarMobile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="transition-all duration-300 lg:min-h-screen overflow-y-auto h-full  bg-gradient-to-b from-[#000000] to-[#121212] text-white shadow-lg">
      <div className="flex items-center justify-between   gap-2 px-4 py-3 font-bold text-xl bg-gradient-to-b from-[#E8C000] to-[#FFD700] text-black">
        {!isCollapsed && (
          <Link to="/">
            <img src={Logo} className="h-8 w-28" />
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-1 py-2">
        {menuItems.map((item, idx) => (
          <SidebarItem key={idx} item={item} isCollapsed={isCollapsed} />
        ))}
      </div>
    </div>
  );
};

export default SidebarMobile;
