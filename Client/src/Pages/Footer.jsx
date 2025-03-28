import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <div className="w-full mb-6 md:mb-5 mx-auto max-w-screen-xl p-4 bg-gray-400 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-black sm:text-center dark:text-black">© 2023 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
