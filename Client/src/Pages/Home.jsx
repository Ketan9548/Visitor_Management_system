import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center bg-gray-100">
      <div className="w-fit md:w-full flex flex-row justify-center items-center  md:flex-col">
        <NavLink
          to="/Userhome"
          className="bg-neutral-700 text-white px-6 py-3 border-2 border-white rounded-3xl text-lg sm:text-xl font-medium w-48 md:w-64 transition duration-300 hover:bg-neutral-800 hover:scale-105"
        >
          Visitor
        </NavLink>

        <NavLink
          to="/loginRegistrationpage"
          className="bg-neutral-700 text-white px-6 py-3 border-2 border-white rounded-3xl text-lg sm:text-xl font-medium w-48 md:w-64 transition duration-300 hover:bg-neutral-800 hover:scale-105"
        >
          Admin
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
