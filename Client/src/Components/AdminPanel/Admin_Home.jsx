import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Admin_Home = () => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <>
      <div className="flex w-full h-screen">
        {/* Sidebar */}
        <div
          className={`fixed md:relative  text-black w-64 h-screen p-5 transition-transform duration-300 ${isToggled ? "translate-x-0" : "-translate-x-64 md:translate-x-0"
            }`}
        >
          <button
            className="md:hidden text-white mb-4 ml-3"
            onClick={() => setIsToggled(false)}
          >
            <X size={27} />
          </button>
          <ul className="flex flex-col space-y-6">
            <li>
              <NavLink to="#" className="hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:text-gray-300">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:text-gray-300">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:text-gray-300">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5">
          {/* Toggle Button */}
          <button
            className="md:hidden text-black mb-4"
            onClick={() => setIsToggled(true)}
          >
            <Menu size={28} />
          </button>
          <p>This is the main content</p>
        </div>
      </div>
    </>
  );
};

export default Admin_Home;
