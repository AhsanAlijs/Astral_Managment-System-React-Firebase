import { RiBarChartGroupedFill, RiCloseFill, RiMenuFill, RiProfileFill, RiUser2Fill, RiUserAddFill, RiUserStarFill } from "@remixicon/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase/firebaseConfig";
import { useAuth } from "../AuthProvider";
import { Menu, Button, Text, rem } from '@mantine/core';


export default function Dashboard() {
    const ref = useRef();



    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null)
            navigate('/')

        }).catch((error) => {
            console.log('user signOut Faild');
        });
    }

    const openSideBar = () => {
        ref.current.classList.toggle('max-lg:-translate-x-full');
    }

    return (
        <>
            <div className="w-full flex gap-2 justify-between items-center p-4 bg-teal-800">
                <p className="font-bold text-3xl bg-gradient-to-b from-teal-50 to-teal-200 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-lg:hidden uppercase [text-shadow:theme(textColor.teal.100)_2px_2px_2px;]">
                    Astral Developers
                </p>

                <button className="text-teal-300 lg:hidden" onClick={openSideBar}>
                    <RiMenuFill size={30} />
                </button>

                <button className="px-4 py-2 bg-sky-400 hover:bg-sky-500 transition-colors text-white rounded-md font-semibold">
                    Logout
                </button>
            </div>

            <div className="grid grid-cols-[18%_auto] max-lg:grid-cols-1">
                <div ref={ref} className=" w-full text-white bg-gradient-to-b from-teal-800 to-teal-400 min-h-[calc(100vh_-_72px)] max-lg:fixed max-lg:top-0 max-lg:inset-0 max-lg:z-50 max-lg:w-9/12 max-lg:max-w-xs max-lg:h-full max-lg:-translate-x-full transition-transform relative max-lg:pt-8">
                    <button className="text-teal-300 lg:hidden absolute  top-2 right-2" onClick={openSideBar}>
                        <RiCloseFill size={30} />
                    </button>

                    <nav className="p-5 ">
                        <div className='flex items-center bg-gradient-to-b from-teal-200 to-teal-50 rounded-md'>
                            <div>
                                <img src="/logos.png" alt="" className="w-[70px] overflow-hidden" />
                            </div>
                            <div className='flex items-center justify-center flex-col gap-[-2]' >
                                <p className='text-lg font-bold text-teal-800'>John</p>
                                <p className='text-slate-600'>Admin</p>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-4 mt-4">
                            <Link to="/dashboard" className="flex gap-4 items-center hover:text-teal-300 transition-colors">
                                <span className='text-teal-300 '>
                                    <RiBarChartGroupedFill size={24} />
                                </span>
                                <span>Dashboard</span>
                            </Link>
                            <Link to="/dashboard/register" className="flex gap-4 items-center hover:text-teal-300 transition-colors">
                                <span className='text-teal-300' >
                                    <RiUserAddFill size={24} />
                                </span>
                                <span>Register</span>
                            </Link>
                            <Link to="/dashboard/employee" className="flex gap-4 items-center hover:text-teal-300 transition-colors">
                                <span className='text-teal-300'>
                                    <RiUser2Fill size={24} />
                                </span>
                                <span>Employee</span>
                            </Link>
                            <Link to="/dashboard/managers" className="flex gap-4 items-center hover:text-teal-300 transition-colors">
                                <span className='text-teal-300'>
                                    <RiUserStarFill size={24} />
                                </span>
                                <span>Manager</span>
                            </Link>
                            <Link to="/dashboard/profile" className="flex gap-4 items-center hover:text-teal-300 transition-colors">
                                <span className='text-teal-300'>
                                    <RiProfileFill size={24} />
                                </span>
                                <span>Profile</span>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <div className="bg-teal-800 min-h-[calc(100vh_-_72px)]">
                    <div className="rounded-tl-2xl max-lg:rounded-tr-2xl shadow-md bg-gradient-to-b from-teal-50 to-teal-100 h-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

