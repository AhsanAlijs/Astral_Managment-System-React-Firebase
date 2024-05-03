import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/firebaseConfig';
import { useAuth } from '../AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })


  const navigate = useNavigate();

  const { user } = useAuth();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      const user = userCredential.user;

      switch (user.type) {
        case 'Admin':
          navigate("/dashboard");
          break;
        case 'Manager':
          navigate("/manager");
          break;
        case 'Employee':
          navigate("/employee");
          break;
      }
    } catch (error) {
      const errorMessage = error.message;

      if (error.message.includes('Firebase: Error (auth/invalid-credential)')) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: 'Email or password is incorrect. Please try again.',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }

  if (user) {
    switch (user.type) {
      case 'Admin':
        return <Navigate to="/dashboard" />
      case 'Manager':
        return <Navigate to="/manager" />
      case 'Employee':
        return <Navigate to="/employee" />
    }
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen px-6 py-12 lg:px-8 bg-gradient-to-b from-teal-800 to-teal-400 ">
        <div className="flex flex-col items-center justify-center  border border-[#40ffff]   rounded-e-3xl rounded-s-3xl shadow-2xl p-8 w-full sm:max-w-md ">
          <img
            className="h-[140px] w-auto mb-5"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-black mb-5">
            Sign In
          </h2>
          <form onSubmit={(e) => loginUser(e)} className="w-full" action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder='email@gmail.com'
                required
                className="block w-full rounded-md   shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Password
                </label>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder='*********'
                required
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <Link to={'/password-reset'} className="text-sm mt-2 block font-semibold ">
                Forgot password?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login


// Signup
// if (err.message.includes("Firebase: Error (auth/email-already-in-use)")) {
//   setModalOpen(true)
//   setErrorMsg("This email is already in use. Please try another one.");
// }

// if (err.message.includes('Firebase: Error (auth/invalid-credential)')) {
//   setModalOpen(true)
//   setErrorMsg('Email or password is incorrect. Please try again.')
// }