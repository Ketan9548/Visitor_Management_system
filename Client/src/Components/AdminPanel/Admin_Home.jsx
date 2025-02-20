import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle
import Fotter from "../../Pages/Footer.jsx";

const Admin_Home = () => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <>
      <div className="flex w-auto h-screen">
        <div
          className={`bg-black absolutre text-white h-screen p-5 transition-all duration-300
            ${isToggled ? "w-64" : "hidden overflow-hidden md:w-64"}`}
        >
          <button
            className="md:hidden text-white mb-4 ml-3"
            onClick={() => setIsToggled(false)}
          >
            <X size={27} />
          </button>
          <ul className="flex flex-col space-y-6">
            <li>
              <NavLink to="adminhomeright" className="hover:text-gray-300">
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

        <div
          className={`flex-1 p-5 transition-all duration-300 
            ${isToggled ? "ml-64 md:ml-0" : "ml-0"}`}
        >
          <button
            className="md:hidden text-black mb-4"
            onClick={() => setIsToggled(true)}
          >
            <Menu size={28} />
          </button>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_Home;