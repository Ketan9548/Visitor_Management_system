import React from 'react';
import companylogo from '../assets/site_logo.png';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen px-4 text-center">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img className="h-16 sm:h-20 md:h-24 object-contain" src={companylogo} alt="Company Logo" />
          <p className="font-bold text-xl sm:text-2xl md:text-3xl">Elumentary Private Ltd</p>
        </div>
        <div className="flex flex-col mt-4 sm:mt-6 justify-center items-center max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Welcome to Elumentary Private Ltd</h2>
          <p className="font-light text-lg sm:text-xl mt-2">
            To book your meeting, click the button below.
          </p>
        </div>
        <div className="mt-4 sm:mt-6">
          <NavLink
            to="/detailform"
            className="bg-neutral-700 text-white px-6 py-3 border-2 border-white rounded-3xl text-lg sm:text-xl font-medium w-full sm:w-60 block sm:inline-block transition duration-300 hover:bg-neutral-800 hover:scale-105"
          >
            Schedule Meeting
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
