import React, { useEffect, useState } from 'react'
import QRcode from 'react-qr-code'

const Detailform = () => {
    const [userdata, setuserdata] = useState({ fullname: "", email: "", mobile: "", date: "", time: "", purposeofvisit: "" })
    // console.log("the value of the name: ", userdata.fullname)

    console.log("the value of the name: ", userdata.fullname)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserdata({ ...userdata, [name]: value })
    }


    return (
        <>
            <div className='flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4'>
                <div className='text-center mb-6'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>Fill the FORM Below</h2>
                    <p className='mt-2 text-sm sm:text-base text-gray-600'>If Your Meeting is Confirmed then Provide a Mail in your Email</p>
                </div>
                <div className="max-w-lg mx-auto p-6 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-md">
                    <form className="space-y-4">
                        <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                            <label className="w-full md:w-1/3 text-gray-700 font-semibold">Full Name</label>
                            <input
                                type="text"
                                value={userdata.fullname}
                                onChange={handleChange}
                                className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                            <label className="w-full md:w-1/3 text-gray-700 font-semibold">Email Address</label>
                            <input
                                type="email"
                                value={userdata.email}
                                onChange={handleChange}
                                className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                            <label className="w-full md:w-1/3 text-gray-700 font-semibold">Phone Number</label>
                            <input
                                type="tel"
                                value={userdata.mobile}
                                onChange={handleChange}
                                className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                            <label className="w-full md:w-1/3 text-gray-700 font-semibold">Date</label>
                            <input
                                type="date"
                                value={userdata.date}
                                onChange={handleChange}
                                className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                            <label className="w-full md:w-1/3 text-gray-700 font-semibold">Time</label>
                            <input
                                type="time"
                                value={userdata.time}
                                onChange={handleChange}
                                className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                            <label className="w-full md:w-1/3 text-gray-700 font-semibold">Purpose of Visit</label>
                            <input
                                type="text"
                                value={userdata.purposeofvisit}
                                onChange={handleChange}
                                className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter the purpose of your visit"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="mt-4 px-6 py-2 bg-gray-900 text-white font-semibold md:cursor-pointer rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Detailform
