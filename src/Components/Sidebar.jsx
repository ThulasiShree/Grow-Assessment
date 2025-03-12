import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { menuItems } from "../Components/Data";
import ShopLogo from "../assets/dasboardlogo.png"

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:block absolute md:static bg-gray-50 min-h-screen w-[80%] md:w-1/4 lg:w-1/5 px-6 py-[40%] md:py-[10%] font-inter shadow-lg`}
    >
      <button
        onClick={closeSidebar}
        className="md:hidden absolute top-[13%] right-[10%] text-xl"
      >
        <IoCloseOutline size={30} />
      </button>
      <section>
        <div className="flex flex-col items-center text-center">
          <img
            src={ShopLogo}
            alt="Shop Logo"
            className="w-24 md:w-32 rounded-lg border-2 border-gray-300"
          />
          <p className="md:text-lg font-bold mt-4 flex items-center space-x-2 capitalize">
            <span>Kannan Departmental</span>
            <IoIosArrowDown className="text-gray-500" />
          </p>
          <small className="md:text-sm text-gray-400 mt-1">
            Shop ID: 1234567890
          </small>
        </div>

        <div className="mt-10">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="sidebar_item flex items-center text-md font-medium text-gray-500 hover:text-gray-800 rounded-lg px-4 py-2"
              >
                {item.icon}
                <span className="ml-4">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;