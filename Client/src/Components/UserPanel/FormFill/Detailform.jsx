import React, { useState, useRef } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';

const Detailform = () => {
    const formdata = {
        fullname: "",
        email: "",
        mobile: "",
        date: "",
        time: "",
        purposeofvisit: ""
    };

    const [userdata, setuserdata] = useState('');
    const [size] = useState(128);
    const qrRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserdata({ ...userdata, [name]: value });
    };

    console.log("The user data is: ", typeof userdata)
    let newdate = new Date(userdata.date).toLocaleString();
    console.log("the date is: ", newdate);

    const handsubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4000/api/add-visitor`, {
            fullname: userdata.fullname,
            email: userdata.email,
            mobile: userdata.mobile,
            date: userdata.date,
            time: userdata.time,
            purposeofvisit: userdata.purposeofvisit
        })
            .then(res => {
                console.log(res.data);
                alert("Form submitted successfully!");
            })
            .catch((err) => {
                console.log("Error during visitor data submission:", err);
            });
        setuserdata('')
    };

    const downloadQR = () => {
        if (qrRef.current) {
            html2canvas(qrRef.current).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'visitor_qr_code.png';
                link.click();
            });
        }
    };

    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4'>
            <div className='text-center mb-6'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>Fill the FORM Below</h2>
                <p className='mt-2 text-sm sm:text-base text-gray-600'>If Your Meeting is Confirmed then Provide a Mail in your Email</p>
            </div>
            <div className="max-w-lg mx-auto p-6 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-md">
                <form onSubmit={handsubmit}>
                    <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                        <label className="w-full md:w-1/3 text-gray-700 font-semibold">Full Name</label>
                        <input
                            type="text"
                            name='fullname'
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
                            name='email'
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
                            name='mobile'
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
                            name='date'
                            value={userdata.date}
                            onChange={handleChange}
                            className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                        <label className="w-full md:w-1/3 text-gray-700 font-semibold">Time</label>
                        <input
                            type="time"
                            name='time'
                            value={userdata.time}
                            onChange={handleChange}
                            className="w-full md:w-2/3 mt-1 md:mt-0 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col p-2 md:flex-row md:items-center md:space-x-4">
                        <label className="w-full md:w-1/3 text-gray-700 font-semibold">Purpose of Visit</label>
                        <input
                            type="text"
                            name='purposeofvisit'
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
            <div>
                <Popup trigger={<button className='bg-green-500 p-2 border-2 border-white rounded-2xl cursor-pointer'>Download QR</button>}
                    position="right center">
                    <div ref={qrRef} className="p-4 bg-white">
                        {
                            userdata && (
                                <QRCode
                                    title="Visitor QR Code"
                                    value={userdata ? JSON.stringify(userdata) : ''}
                                    bgColor="white"
                                    fgColor="black"
                                    size={size}
                                />
                            )
                        }
                    </div>
                    <button onClick={downloadQR} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                        Download
                    </button>
                </Popup>
            </div>

        </div>
    );
};

export default Detailform;
