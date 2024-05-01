import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../config/firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import { RiLoginBoxFill } from '@remixicon/react';
import Swal from 'sweetalert2';

const ForgotPassword = () => {


    const forgotPass = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        try {
            await sendPasswordResetEmail(auth, email);

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "success",
                title: "Password reset email sent successfully."
            });

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                position: "top-center",
                icon: "warning",
                title: errorMessage,
                showConfirmButton: false,
                timer: 1500
            })

        }
    }


    return (

        <div className="flex items-center justify-center h-screen px-6 py-12 lg:px-8 bg-gradient-to-b from-teal-800 to-teal-400 ">

            <div className="flex flex-col items-center justify-center  border border-[#40ffff]   rounded-e-3xl rounded-s-3xl shadow-2xl p-8 w-full sm:max-w-md ">
                <img
                    className="h-[140px] w-auto mb-5"
                    src="/logo.png"
                    alt="Your Company"
                />
                <h2 className="text-2xl font-bold leading-9 tracking-tight text-black mb-5">
                    ForgotPassword
                </h2>
                <form onSubmit={(e) => forgotPass(e)} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-5 text-black">
                            Enter Your Register Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder='email@gmail.com'
                            required
                            className="block w-full rounded-md   shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                    </div>

                    <Link to={'/'} className=" flex items-center text-sm mt-2  font-semibold ">
                        <p>LogIn</p> <span><RiLoginBoxFill /></span>
                    </Link>
                    <div className="mt-2">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out"
                        >
                            ForgotPassword

                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default ForgotPassword
