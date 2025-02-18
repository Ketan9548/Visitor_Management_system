import React from 'react';
import { NavLink } from 'react-router-dom';

const Login_Registration_Home_page = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Admin</h2>
                <p className="text-gray-600 mb-6">Manage and monitor your admin panel efficiently.</p>

                <div className="flex flex-col gap-4">
                    <NavLink
                        to="/loginadmin"
                        className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 w-full"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/registrationadmin"
                        className="bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300 w-full"
                    >
                        Register
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login_Registration_Home_page;
