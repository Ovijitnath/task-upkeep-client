import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../../Assets/taskupkeep.PNG'
const Footer = () => {
    return (
        <div>
            <div className=" bg-gray-50">
                <div className="max-w-2xl mx-auto  py-10">
                    <div className="text-center">
                        <h3 className="text-2xl mb-3 font-semibold"> Download Task-Upkeep app </h3>

                        <p> Stay organized. All day, every day!</p>
                        <div className="flex justify-center my-10">
                            <div className="flex items-center w-auto rounded-lg px-4 py-2  mx-2 text-gray-800  hover:bg-indigo-300 hover:text-gray-600 ">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt='img' className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-900'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="flex items-center w-auto rounded-lg px-4 py-2 mx-2 text-gray-800  hover:bg-indigo-300 hover:text-gray-600 ">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt='img' className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-900'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-900">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; All Rights Reserved @Task-Upkeep </p>
                        <img src={logo} className="mr-3 h-8" alt="Task-Upkeep Logo" />
                        <div className="order-1 md:order-2">
                            <span className="text-gray-800  hover:text-gray-600  px-2">About us</span>
                            <span className="text-gray-800  hover:text-gray-600  px-2 border-l">Contact us</span>
                            <span className="text-gray-800  hover:text-gray-600  px-2 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;