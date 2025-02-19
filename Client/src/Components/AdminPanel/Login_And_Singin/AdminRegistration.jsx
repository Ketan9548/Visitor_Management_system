import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AdminRegistration = () => {
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (admin.password !== admin.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            await axios.post('/api/registration', { username: admin.name, email: admin.email, password: admin.password })
                .then((response) => { console.log(response) })
                .catch((error) => { console.log(("error in registration admin", error)) })
            navigate('/loginadmin')
        } catch (error) {
            console.error("Error in admin registration", error);
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Admin Registration
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={admin.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={admin.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={admin.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={admin.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                    >
                        Register
                    </button>
                    <div className="flex flex-col justify-center sm:flex-row items-center sm:items-start text-center sm:text-left">
                        <NavLink to="/loginadmin">
                            <span className="font-bold mr-1 underline text-blue-600 hover:text-blue-800">Click here</span>
                        </NavLink>
                        <span>to Login Account.</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminRegistration;
