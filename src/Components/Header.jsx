import React from "react";
import { userIcons } from "./Data";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="shadow-lg font-inter fixed left-0 right-0 z-20 bg-white">
      <nav className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Hamburger Menu for Mobile */}
        <button className="text-gray-500 md:hidden" onClick={toggleSidebar}>
          <RxHamburgerMenu size={25} />
        </button>

        {/* App Logo */}
        <h1 className="hidden md:flex text-3xl font-semibold bg-gradient-to-r from-[#668D12] to-[#ACC43F] bg-clip-text text-transparent uppercase">
          <i>rewadify</i>
        </h1>

        {/* Welcome Message */}
        <h2 className="hidden md:flex text-xl md:text-2xl font-bold text-center md:text-left md:text-left md:ml-[-260px]">
          Welcome, Thulasi👋
        </h2>

        {/* User Icons */}
        <ul className="flex items-center justify-center space-x-4 md:space-x-8">
          {userIcons.map((item, index) => (
            <li
              key={index}
              className={`bg-[#F2F8DF] px-3 py-1 rounded-full flex items-center ${item.style}`}
            >
              {/* Check and Render Content */}
              {item.content && (
                <span className="ml-2">{item.content}</span>
              )}
              {item.image ? (
                <img
                  src={item.image}
                  alt="User Icon"
                  className="w-4 h-4 md:w-4 md:h-4 mx-1 text-center"
                />
              ) : (
                item.icon
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
