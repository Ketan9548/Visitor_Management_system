import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminHomeRight = () => {
    const [visitordata, setvisitordata] = useState([]);


    const getVisitorData = async () => {
        try {
            const response = await axios.get('/api/get-visitors')
                .then((res) => setvisitordata(res.data))
                .then((res) => console.log("the value is:", res.data))
                .catch((err) => console.log("error during api routes get visitor data : ", err))
        } catch (error) {
            console.log("error during to fetch the data in the backend: ", error)
        }
    }

    async function handlecheck(id) {
        try {
            if (id) {
                const confirmMation = window.alert('are you sure you want to checked In this Visitor')
                if (!confirmMation) return;

                await handlecheck(id)
                await axios.put(`/api/check-in/${id}`)
                    .then((res) => console.log("check is marked successfully", res))
                    .catch((err) => console.log("error during to check completed field"))
            }

        } catch (error) {
            console.log("Error in handlecheck:", error);
        }

    }

    let counter = 0;
    function findtodayvisitor(params) {
        let today = new Date();
        if (visitordata.date === today.toDateString && counter < visitordata.length) {
            counter++;
            console.log("the counter value is: ", counter);
        }
        return counter;
    }

    async function handledelete(id) {
        try {
            await axios.delete(`/api/delete/${id}`);
            console.log("Deleted successfully");
            getVisitorData();
        } catch (err) {
            console.log("Error during deletion:", err);
        }
    }

    useEffect(() => {
        getVisitorData();
        findtodayvisitor();
        console.log("the data of visitor is:", visitordata)
    }, [])


    return (
        <>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className="w-full mb-4 md:mb-0 max-w-sm bg-white border flex justify-center flex-col items-center border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-center p-4 md:h-fit border-2 mt-2 border-white rounded-4xl w-fit h-auto bg-white'>
                        <p className='text-black text-5xl'>{visitordata.length}</p>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Today Visitors</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Admin Desktop</span>
                    </div>
                </div>
                <div className="w-full mb-4 md:mb-0 max-w-sm bg-white border flex justify-center flex-col items-center border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-center p-4 border-2 mt-2 border-white rounded-4xl w-fit h-fit bg-white'>
                        <p className='text-black text-5xl'>{visitordata.completed === true ? visitordata.length : ''}</p>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Today Visitors</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show List</a>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-4 md:mb-0 max-w-sm bg-white border flex justify-center flex-col items-center border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-center p-4 border-2 mt-2 border-white rounded-4xl w-fit h-fit bg-white'>
                        <p className='text-black text-5xl'>{counter}</p>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Today Visitors</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show List</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto mt-11">
                <table className="w-full border-collapse overflow-x-auto border border-gray-300 shadow-lg min-w-max">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            {["S.No.", "Name", "Email", "Phone", "Date", "Time", "Purpose", "Completed", "Delete"].map((head) => (
                                <th
                                    key={head}
                                    className="border border-gray-300 px-2 py-2 text-left text-xs md:text-sm lg:text-base whitespace-nowrap"
                                >
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {visitordata.length > 0 ? (
                        <tbody>
                            {visitordata.map((value, index) => (
                                <tr key={value._id} className="odd:bg-white even:bg-gray-100 text-xs md:text-sm lg:text-base">
                                    <td className="border border-gray-300 px-2 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-2 py-2">{value.fullname}</td>
                                    <td className="border border-gray-300 px-2 py-2 whitespace-nowrap">
                                        {value.email}
                                    </td>
                                    <td className="border border-gray-300 px-2 py-2">{value.mobile}</td>
                                    <td className="border border-gray-300 px-2 py-2">
                                        {value.date ? new Date(value.date).toLocaleString() : "N/A"}
                                    </td>
                                    <td className="border border-gray-300 px-2 py-2">{value.time}</td>
                                    <td className="border border-gray-300 px-2 py-2">{value.purposeofvisit}</td>
                                    <td className="border border-gray-300 px-2 py-2">
                                        <input onClick={() => handlecheck(value._id)} type="checkbox" defaultChecked={value.completed} />
                                    </td>
                                    <td className="border border-gray-300 px-2 py-2">
                                        <button
                                            className="cursor-pointer bg-red-600 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-700 transition-all duration-200"
                                            onClick={() => handledelete(value._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan="9" className="text-center py-4 text-gray-500">No Data Available</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </>
    )
}

export default AdminHomeRight
