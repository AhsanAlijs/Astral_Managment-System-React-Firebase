import { RiAtLine, RiMailLine, RiPhoneLine, RiUser3Line } from '@remixicon/react';
import React from 'react';

function ProfileComponent({ }) {
    return (

        <main className="max-w-screen-md mx-auto p-4">
            <article className='mt-10  bg-gradient-to-b from-teal-800 to-teal-500 p-6 rounded-2xl shadow-xl '>

                <div className="grid grid-cols-[1fr_3fr] gap-4 items-center justify-center">
                    <div className="self-start">
                        <img src="https://i.pinimg.com/originals/4a/5c/2f/4a5c2f2a828314d79432bb91afeb3ef3.jpg" alt="" className='size-44 overflow-hidden rounded-full object-cover shadow-xl  ' />
                    </div>

                    <div className='text-white space-y-1'>
                        <p className="text-2xl font-bold flex items-center gap-2 ">
                            <span><RiUser3Line size={24} /></span>
                            Qamar Khan
                        </p>
                        <p className="text-xl font-medium flex items-center gap-2">
                            <span><RiAtLine size={24} /></span>
                            qamarkhan@gmail.com
                        </p>
                        <p className="font-medium flex items-center gap-2">
                            <span>
                                <RiPhoneLine size={24} />
                            </span>
                            +923125458700
                        </p>
                    </div>

                </div>
            </article>


        </main>
    );
}

export default ProfileComponent;
