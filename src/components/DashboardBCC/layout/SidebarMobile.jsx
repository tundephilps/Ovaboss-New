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
      { label: "Unlimited Orders", path: "/Orders/UnlimitedOrders" },
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
      { label: "Add New Goods", path: "/Goods/AddNew" },
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
    path: "/Wallets",
    children: [
      { label: "BCC SIGNON", path: "/Wallets/BCCSignon" },
      { label: "BCC BUYON", path: "/Wallets/BCCBuyon" },
      { label: "SELLON", path: "/Wallets/SELLOn" },
      { label: "BRA", path: "/Wallets/BRA" },
    ],
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
        path: "/Reports/Payout",
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
