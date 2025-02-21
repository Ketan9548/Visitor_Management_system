import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Admin_Home = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <div
          className={`absolute md:relative bg-neutral-500 p-6 w-56 h-full md:block transition-all ${isToggled ? "left-0" : "-left-64"
            } md:left-0`}
        >
          <button
            className="absolute top-4 right-4 text-white md:hidden"
            onClick={() => setIsToggled(false)}
          >
            <X size={24} />
          </button>
          <p className="mt-3 text-white">
            <NavLink to="#">Home</NavLink>
          </p>
          <p className="mt-3 text-white">
            <NavLink to="#">Completed</NavLink>
          </p>
          <p className="mt-3 text-white">
            <NavLink to="#">About</NavLink>
          </p>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-3.5">
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsToggled(true)}
          >
            <Menu size={24} />
          </button>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_Home;
