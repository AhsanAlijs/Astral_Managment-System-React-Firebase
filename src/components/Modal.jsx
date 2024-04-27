import { RiCheckDoubleLine, RiCloseLargeFill, RiEdit2Line } from '@remixicon/react';
import React, { useState } from 'react'

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (event.target.id === 'modal') {
            setModalOpen(false);
        }
    };

    return (
        <>
            <div className='max-w-screen-xl mx-auto p-4'>

                <button className=" text-teal-500 " onClick={openModal}>
                    <RiEdit2Line size={35} />
                </button>

                {modalOpen && (

                    <div className="  fixed inset-0 bg-gray-600 bg-opacity-50  h-full w-full" id="modal" onClick={handleOutsideClick}>
                        <div className="relative top-20 mx-auto p-5 border w-[98%]  max-w-screen-lg shadow-lg rounded-md bg-gradient-to-bl from-teal-100 to-teal-200 ">
                            <div className="mt-3 text-center">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                                    <img src="https://w7.pngwing.com/pngs/1018/119/png-transparent-computer-icons-editing-pencil-miscellaneous-angle-pencil.png" className='h-6 w-6 text-teal-500' alt="" />
                                </div>

                                <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Task</h3>
                                <div className="mt-2 px-7 py-3">
                                    <p className="text-xl text-gray-500">Change Title or Task Description</p>

                                    <section className="py-1 bg-blueGray-50">
                                        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                            </div>


                                            <form className='flex flex-wrap' >
                                                <div className="w-full  lg:w-12/12 px-4">
                                                    <div className="relative lg:w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                                            Edit Task Title
                                                        </label>
                                                        <input
                                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                            name='description'
                                                            className="border-0 text-lg   px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full  ease-linear transition-all duration-150"
                                                            rows="4"
                                                            placeholder='Edit Task Title'
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                                            Edit Task Details
                                                        </label>
                                                        <textarea
                                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                            name='description'
                                                            className="border-0  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            rows="4"
                                                            placeholder='Edit Task Details...'
                                                        />
                                                    </div>
                                                </div></form>
                                        </div>
                                    </section >


                                </div>
                                <div className=" flex  items-center justify-center gap-10 px-4 py-3">

                                    <button id="ok-btn" className=" rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out">
                                        <RiCheckDoubleLine size={25} />
                                    </button>

                                    <button id="exit" className=" rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out" onClick={closeModal}>
                                        <RiCloseLargeFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}

export default Modal
