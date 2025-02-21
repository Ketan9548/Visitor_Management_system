import React from 'react'

const AdminHomeRight = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className="w-full mb-4 md:mb-0 max-w-sm bg-white border flex justify-center flex-col items-center border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-center p-4 md:h-fit border-2 mt-2 border-white rounded-4xl w-fit h-auto bg-white'>
                        <p className='text-black text-5xl'>8</p>
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
                        <p className='text-black text-5xl'>8</p>
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
                        <p className='text-black text-5xl'>8</p>
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
                <table className="w-full border-collapse border border-gray-300 shadow-lg min-w-max">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            {["ID", "Name", "Email", "Phone", "Gender", "Date"].map((head) => (
                                <th
                                    key={head}
                                    className="border border-gray-300 px-2 py-2 text-left text-xs md:text-sm lg:text-base whitespace-nowrap"
                                >
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4].map((id) => (
                            <tr key={id} className="odd:bg-white even:bg-gray-100 text-xs md:text-sm lg:text-base">
                                <td className="border border-gray-300 px-2 py-2">#{id}</td>
                                <td className="border border-gray-300 px-2 py-2">John Doe</td>
                                <td className="border border-gray-300 px-2 py-2 whitespace-nowrap">
                                    john@example.com
                                </td>
                                <td className="border border-gray-300 px-2 py-2">123-456-7890</td>
                                <td className="border border-gray-300 px-2 py-2">Male</td>
                                <td className="border border-gray-300 px-2 py-2">2025-02-21</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default AdminHomeRight
