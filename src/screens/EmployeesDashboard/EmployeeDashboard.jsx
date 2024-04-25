import { RiAccountPinCircleFill, RiCloseFill, RiMenuFill, RiTaskFill } from '@remixicon/react'
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase/firebaseConfig'
import { useAuth } from '../AuthProvider'
import { signOut } from 'firebase/auth'

const EmployeeDashboard = () => {

  const [asideOpen, setAsideOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const { user, setUser } = useAuth();
  // console.log(user);

  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null)
      navigate('/')

    }).catch((error) => {
      console.log('user signOut Faild');
    });
  }


  return (
    <div>
      <main className="max-w-screen-2xl mx-auto min-h-screen w-full text-gray-700" x-data="layout">
        {/* header page */}
        <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
          {/* logo */}
          <div className="flex items-center space-x-2">
            <button type="button" className="text-3xl  icon  " onClick={() => setAsideOpen(!asideOpen)}>
              {asideOpen ? <RiCloseFill size={30} /> : <RiMenuFill size={30} />}
            </button>
          </div>

          <div className=""><img src="/logos.png" alt="logo" className=" h-16" /></div>
          {/* button profile */}
          <div>
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              // onClickOutside={() => setProfileOpen(false)}
              className="overflow-hidden  rounded-full"
            >
              <img src={user.imageUrl} alt="plchldr.co" className="h-16 w-16" />
            </button>

            {/* dropdown profile */}
            {profileOpen && (
              <div className="absolute right-[10px] lg:right-[200px] mt-3 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
                <div className="flex items-center space-x-2 p-2">
                  <img src={user.imageUrl} alt="plchldr.co" className="h-9 w-9 rounded-full" />
                  <div className="font-medium">{user.name}</div>
                </div>

                <div className="flex flex-col space-y-3 p-2">

                </div>

                <div className="p-2">
                  <button onClick={logOut} className="flex items-center space-x-2 transition hover:text-blue-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    <div  >Log Out</div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="flex min-h-[calc(100vh_-_60px)]">
          {/* aside */}
          <aside className={`flex w-72 mt-[5px] flex-col space-2  border-2 rounded-md mb-20  border-black-200 bg-white p-4 ${asideOpen ? '' : 'hidden'} translate-10 `}>

            {/* sidebar header Start */}
            <div className="mt-[5px]">
              <header className="text-[20px] font-bold border-b-[1px]">Employees Dashboard</header>
            </div>
            {/* sidebar header End */}

            <Link to={"/employee"} className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[gray]">
              <span>
                <RiTaskFill />
              </span>
              <span className="text-[18px] font-[500]" >Your Tasks</span>
            </Link>

            <Link to={'/employee/employeeProfile'} className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[gray]">
              <span>
                <RiAccountPinCircleFill />
              </span>
              <span className="text-[18px] font-[500]" >Profile</span>
            </Link>
          </aside>

          {/* main content page */}
          <div className="w-full p-4">
            <Outlet>

            </Outlet>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EmployeeDashboard
