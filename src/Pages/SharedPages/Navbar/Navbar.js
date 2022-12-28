import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/taskupkeep.PNG'
import { AuthContext } from '../../../Context/AuthProvider';
const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (

        <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
                <div className="px-8 mx-auto max-w-9xl">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                            <Link className="flex-shrink-0 p-2" to="/">
                                <img className="w-27 h-12" src={logo} alt="Workflow" />
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex items-baseline ml-10 space-x-4">
                                    <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home">
                                        Home
                                    </Link>
                                    <Link className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/addtask">
                                        Add Task
                                    </Link>
                                    <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/mytask">
                                        My Task
                                    </Link>
                                    <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/completedtask">
                                        Completed Task
                                    </Link>

                                    {user?.uid ?
                                        <>

                                            <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" ><button onClick={handleLogOut}>Log out</button></Link>
                                        </>
                                        : <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" ><Link to="/login">Login</Link></Link>}

                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="flex items-center ml-4 md:ml-6">
                            </div>
                        </div>
                        <div className="flex -mr-2 md:hidden">
                            <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home">
                            Home
                        </Link>
                        <Link className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" to="/addtask">
                            Add Task
                        </Link>
                        <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/mytask">
                            My Task
                        </Link>
                        <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/completedtask">
                            Completed Task
                        </Link>
                        {user?.uid ?
                            <>

                                <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" ><button onClick={handleLogOut}>Log out</button></Link>
                            </>
                            : <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" ><Link to="/login">Login</Link></Link>}
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Navbar;