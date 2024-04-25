import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/firebaseConfig';
import { useAuth } from '../AuthProvider';


const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })


  const navigate = useNavigate();



  const { user } = useAuth();



  // onAuthStateChanged(auth, (user) => {
  //   if (!user) {
  //     return
  //   }



  // });

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        const users = userCredential.user;
        console.log(users);

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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-bold text-gray-900">
            <img className="w-[100px] mr-2" src="/logo.png" alt="logo" />
            Astral Developer
          </a>
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              
              <form onSubmit={(e) => loginUser(e)} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-2.5" placeholder="name@company.com" required onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md block w-full p-2.5" required onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                </div>

                <a href="#" className="block text-sm font-medium text-end text-primary-600 hover:underline">Forgot password?</a>

                <button type="submit" className="w-full text-white bg-[#2da790] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold text-base rounded-md px-5 py-2.5 text-center transition-colors hover:bg-[#46bca6]">Sign in</button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet? <Link to="/dashboard/register" className="font-medium text-primary-600 hover:underline">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Login
