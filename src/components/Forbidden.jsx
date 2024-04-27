import React from 'react'

const Forbidden = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen px-6 py-12 lg:px-8 bg-gradient-to-b from-teal-800 to-teal-400 ">

                <div className="flex flex-col items-center justify-center  border border-[#86fafa] bg-white  rounded-e-3xl rounded-s-3xl shadow-2xl p-8 w-full sm:max-w-lg ">
                    <img
                        className="h-[240px] w-auto mb-5"
                        src="/403.png"
                        alt="Your Company"
                    />
                    <h2 className="text-2xl font-bold leading-9 tracking-tight text-black mb-5">

                        You are not authorized <span className='text-5xl' >!</span>
                    </h2>
                    


                </div>
            </div>
        </>
    )
}

export default Forbidden
