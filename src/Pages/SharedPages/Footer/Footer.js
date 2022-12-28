import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../../Assets/taskupkeep.PNG'
const Footer = () => {
    return (
        <div>

            {/* <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="mr-3 h-8" alt="Task-Upkeep Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task-Upkeep</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="https://flowbite.com/" className="hover:underline">Task-upkeep</Link>. All Rights Reserved.
                </span>
            </footer> */}

            <div className=" bg-gray-200">
                <div className="max-w-2xl mx-auto  py-10">
                    <div className="text-center">
                        <h3 className="text-3xl mb-3"> Download our fitness app </h3>
                        <p> Stay fit. All day, every day. </p>
                        <div className="flex justify-center my-10">
                            <div className="flex items-center w-auto rounded-lg px-4 py-2  mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt='img' className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-900'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="flex items-center w-auto rounded-lg px-4 py-2 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt='img' className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-900'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-900">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2021. </p>
                        <div className="order-1 md:order-2">
                            <span className="px-2">About us</span>
                            <span className="px-2 border-l">Contact us</span>
                            <span className="px-2 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;