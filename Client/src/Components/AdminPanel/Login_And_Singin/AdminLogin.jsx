import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", {
        email: admin.email,
        password: admin.password,
      });

      const token = res.data.token;
      if (token) {
        localStorage.setItem("admin-token", token);
        console.log("Login Success:", res.data);
        navigate("/Adminhome");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || "Error");
      setError(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-600 text-center font-medium mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          <div className="flex flex-col justify-center sm:flex-row items-center sm:items-start text-center sm:text-left">
            <NavLink to="/registrationadmin">
              <span className="font-bold mr-1 underline text-blue-600 hover:text-blue-800">Click here</span>
            </NavLink>
            <span>to create a new account.</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
