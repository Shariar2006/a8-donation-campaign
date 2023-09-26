import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri';

const MainLayout = () => {

    const [open, setopen] = useState(false)

    return (
        <div>
            <nav className='flex justify-between items-center p-4 pr-24 shadow-md'>
                <img src="https://i.ibb.co/z6Bq1XC/Logo.png" alt="" />
                <div>

                <span onClick={() => setopen(!open)} className='text-2xl lg:hidden font-bold'>
                        {
                            open === true ? <RiCloseFill className='mt-5'></RiCloseFill> : <RiMenu2Fill className='mt-5'></RiMenu2Fill>
                        }

                    </span>

                    <ul className={`text-xl font-bold duration-1000 absolute bg-[#f07f83] ${open ? 'top-20' : '-top-52'} text-white text-center lg:text-black p-3 lg:bg-white lg:static lg:flex gap-4 `}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-gray-300 lg:text-[#FF444A] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-gray-300 lg:text-[#FF444A] underline" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-gray-300 lg:text-[#FF444A] underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
            </nav>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;