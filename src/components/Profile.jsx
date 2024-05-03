import { RiAtLine, RiBriefcaseFill, RiCalendarFill, RiMailLine, RiMoneyDollarBoxFill, RiPassPendingFill, RiPhoneLine, RiShieldStarFill, RiSmartphoneFill, RiUser3Line, RiUserFill, RiUserLocationFill } from '@remixicon/react';
import React from 'react';
import { useAuth } from '../screens/AuthProvider';

function ProfileComponent() {

    const { user } = useAuth();

    return (

        <main className="max-w-screen-md mx-auto p-4">





            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">

                    <div className="p-4 md:p-12 text-center lg:text-left">

                        {user.type === "Admin" ?
                            <>
                                <img src={user.imageUrl} alt="image" className='block lg:hidden object-cover rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center' />

                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.name} </h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                    <span className="h-4 fill-current text-teal-700" >
                                        <RiAtLine size={24} />
                                    </span>
                                    {user.email}
                                </p>
                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className="h-4 fill-current text-teal-700" >
                                        <RiSmartphoneFill size={24} />
                                    </span>

                                    {user.phoneNumber}
                                </p>
                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className="h-4 fill-current text-teal-700" >
                                        <RiUserFill size={24} />
                                    </span>
                                    {user.type}
                                </p>
                            </> :
                            <>
                                <img src={user.imageUrl} alt="image" className='block lg:hidden object-cover rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center' />

                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.name} </h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                    <span className="h-4 fill-current text-teal-700" >
                                        <RiAtLine size={24} />
                                    </span>
                                    {user.email}
                                </p>

                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className="h-4 fill-current text-teal-700" >
                                        <RiSmartphoneFill size={24} />
                                    </span>

                                    {user.phoneNumber}
                                </p>

                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className="h-4 fill-current text-teal-700" >
                                        <RiUserFill size={24} />
                                    </span>
                                    {user.type}
                                </p>

                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                    <span className="h-4 fill-current text-teal-700">
                                        <RiUserLocationFill size={24} />
                                    </span>
                                    {user.address}
                                </p>

                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className='h-4 fill-current text-teal-700'><RiBriefcaseFill size={24} /></span>

                                    {user.department}
                                </p>

                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className="h-4 fill-current text-teal-700">
                                        <RiCalendarFill size={24} />
                                    </span>
                                    {user.joiningDate}
                                </p>

                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className="h-4 fill-current text-teal-700" >
                                        <RiShieldStarFill size={24} />
                                    </span>

                                    {user.qualification}
                                </p>

                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className="h-4 fill-current text-teal-700" >
                                        <RiPassPendingFill size={24} />
                                    </span>

                                    {user.registerId}
                                </p>

                                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">

                                    <span className='h-4 fill-current text-teal-700'>
                                        <RiMoneyDollarBoxFill size={24} />
                                    </span>
                                    {user.salary}
                                </p>
                            </>
                        }
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <img src={user.imageUrl} className=" shadow-2xl hidden lg:block h-[25.5rem] object-cover " alt="profile" />
                </div>
            </div>












        </main>
    );
}

export default ProfileComponent;
