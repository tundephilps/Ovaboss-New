import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

import { FiMoreVertical } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import NoTableData from "../../NoTableData";
import Loading from "../../Loading";
import { IsLoading, Product } from "../../../types/product.type";
import { formatDate } from "../../../utils";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import DeleteModal from "../../DeleteModal";
import { useAppContext } from "../../../context/AppContext";
import SwitchBusiness from "../../SwitchBusiness";

// Dropdown content data
const filterMenuOptions = {
  Date: [
    "Last 3 Days",
    "Last 7 Days",
    "Last 2 Weeks",
    "Last 1 Month",
    "Last 3 Months",
    "Last Year",
  ],
  Status: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
};

interface AllGoodsTableProps {
  isLoading: IsLoading;
  products: Product[];
  handleDeleteProduct: (productId: number, callback: () => void) => void;
}

const AllGoodsTable = ({ isLoading, products, handleDeleteProduct }: AllGoodsTableProps) => {
  const [activeFilterMenu, setActiveFilterMenu] = useState<string | null>(null);
  const [openMenuIndex, setOpenMenuIndex] = useState<null | number>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { selectedBusinessAccount } = useAppContext();

  const navigate = useNavigate();

  const handleFilterToggle = (menuName: string) => {
    setActiveFilterMenu((prev) => (prev === menuName ? null : menuName));
  };

  const toggleMenu = (index: number) => {
    setOpenMenuIndex((prev) => (prev === index ? null : index));
  };

  const deleteProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  }

  const editProduct = (product: Product) => {
    // setCurrentProduct(product);
    navigate(`/Goods/product/update?productId=${product.productId}`);
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "text-green-600";
      case "Pending":
        return "text-yellow-500";
      case "Rejected":
        return "text-red-500";
      default:
        return "text-gray-600";
    }
  };

  const callback = () => setShowDeleteModal(false);

  return (
    <div className="bg-white mx-4 p-4 rounded-sm overflow-x-clip">
    <DeleteModal
      isOpen={showDeleteModal}
      onClose={() => setShowDeleteModal(false)}
      onConfirm={() => handleDeleteProduct(selectedProduct!.productId, callback)}
      loading={isLoading.isSaving}
      message="Are you sure you want to delete this product?"
    />
      <SwitchBusiness label="products"/>

      <div className="flex lg:flex-row flex-col justify-between items-center mb-6">
        <div className="flex gap-4 items-center  whitespace-nowrap">
          <p className="font-semibold text-sm lg:flex hidden ">Sort By</p>
          {Object.entries(filterMenuOptions).map(([menuName, menuItems]) => (
            <div key={menuName} className="relative">
              <button
                onClick={() => handleFilterToggle(menuName)}
                className="border px-4 py-2 rounded bg-gray-50 flex items-center text-xs gap-6"
              >
                <div className="inline-flex items-center gap-1 text-black">
                  <VscSettings className="text-xs" />
                  {menuName}
                </div>
                <MdKeyboardArrowDown />
              </button>

              {activeFilterMenu === menuName && (
                <div className="absolute left-0 top-12 bg-white rounded shadow p-2 text-sm w-44 z-10">
                  {menuItems.map((item) => (
                    <div
                      key={item}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        console.log(`${menuName} selected:`, item);
                        setActiveFilterMenu(null);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Link to="/Goods/product/add">
          <button className="flex items-center text-xs gap-2 bg-[#FFD700] hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded">
            <FiPlus />
            Add Product
          </button>
        </Link>
      </div>

      <table className="w-full text-sm text-left">
        <thead className="border-b font-semibold">
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Review Status</th>
            {/* <th>Stock</th> */}
            <th>Date Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isLoading.myProducts &&
            <tr>
              <td colSpan={6}><Loading/></td>
            </tr>
          }
          <NoTableData 
            colspan={6} 
            isLoading={isLoading.myProducts} 
            data={products}
          />
          {products.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td>{idx + 1}</td>
              <td>
                <img
                  src={item.productImages[0]?.imageUrl}
                  alt={item.title}
                  className="w-10 h-10 rounded object-cover"
                />
              </td>
              <td>{item.title}</td>
              <td className={getStatusColor(item.approvalStatus)}>
                {item.approvalStatus}
              </td>
              {/* <td>{item.}</td> */}
              <td>{formatDate(item.createdAt)}</td>
              <td className="py-3 relative">
                <div
                  className="p-1 text-gray-600 hover:text-black cursor-pointer"
                  onClick={() => toggleMenu(idx)}
                >
                  <BiDotsHorizontalRounded size={18} />
                </div>

                {openMenuIndex === idx && (
                  <div className="absolute right-4 mt-2 z-10 bg-white border rounded shadow-md text-[10px] w-28">
                    <div 
                      onClick={() => editProduct(item)}
                      className="w-full px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      Edit
                    </div>
                    <div 
                      onClick={() => deleteProduct(item)} 
                      className="w-full px-4 py-2 hover:bg-gray-100 text-left text-red-600 cursor-pointer"
                    >
                      Delete
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllGoodsTable;
