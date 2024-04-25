import React, { useState } from 'react'
import Modal from './Modal'
import { RiDeleteBinLine, RiEdit2Line } from '@remixicon/react'


const ManagerTask = () => {







    return (
        <>
            <div className='flex items-center justify-center flex-col  lg:items-center lg:flex-row lg:justify-center lg:gap-3 lg:flex-wrap p-0  ' >


                <div className="task-div-child border w-full lg:w-[50%] p-2 lg:p-6 rounded-lg shadow-xl mt-4 ">
                    <header className='text-[30px] underline' >Employee name</header>
                    <header className='text-[30px] underline' >Task Title</header>
                    <p className='text-justify font-[sans-pro-light] font-extrabold mt-2 ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laborum officiis ex id ea sunt minima soluta deleniti dignissimos, pariatur magnam maiores in doloremque quasi iste facere laboriosam explicabo neque.Tempore laborum officiis ex id ea sunt minima soluta deleniti dignissimos, pariatur magnam maiores in doloremque quasi iste facere laboriosam explicabo neque.Tempore laborum officiis ex id ea sunt minima soluta deleniti dignissimos, pariatur magnam maiores in doloremque quasi iste facere laboriosam explicabo neque.Tempore laborum officiis ex id ea sunt minima soluta deleniti dignissimos, pariatur magnam maiores in doloremque quasi iste facere laboriosam explicabo neque.Tempore laborum officiis ex id ea sunt minima soluta deleniti dignissimos, pariatur magnam maiores in doloremque quasi iste facere laboriosam explicabo neque.Tempore laborum officiis ex id ea sunt minima soluta deleniti dignissimos, pariatur magnam maiores in doloremque quasi iste facere laboriosam explicabo neque.</p>

                    <div className='flex flex-col items-center lg:flex-row justify-center gap-5 mt-5' >

                        <div className='flex gap-2' >
                            <label htmlFor="startDate" className='text-[20px]' >Start Date:-</label>
                            <p className='font-[sans-pro-light] font-extrabold text-[20px] ' >10/4/2024</p>
                        </div>

                        <div className='flex gap-2' >
                            <label htmlFor="endDate" className='text-[20px]' >End Date:-</label>
                            <p className='font-[sans-pro-light] font-extrabold text-[20px] ' >10/4/2024</p>
                        </div>

                    </div>
                    <div className='button flex items-center  lg:flex-row justify-center gap-4 mt-5 ' >
                        <div>
                            <Modal />
                        </div>
                        <button><RiDeleteBinLine size={35} /></button>
                    </div>
                </div>
            </div>











        </>





    )
}

export default ManagerTask
