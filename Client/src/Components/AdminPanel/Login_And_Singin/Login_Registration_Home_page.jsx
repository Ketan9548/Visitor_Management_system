import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Login_Registration_Home_page = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("admin-token");
        if (token) {
            setIsLogin(true);
        }
    }, []);

    const handleLogin = () => {
        isLogin === false ? navigate('/loginadmin') : navigate('adminhome');
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {isLogin ? "Welcome, Admin!" : ""}
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {isLogin
                            ? "You are logged in. Manage your dashboard here."
                            : "Please log in to access the admin panel."}
                    </p>
                    <div className="mt-4 space-x-4">
                        {isLogin ? (
                            <button
                                onClick={handleLogin}
                                className="bg-blue-60 cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Login
                            </button>
                        ) : (
                            <button
                                onClick={handleLogin}
                                className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition duration-300"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login_Registration_Home_page
