import { RiArrowLeftLine } from '@remixicon/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddTask = () => {



    const [notLoading, SetNotLoading] = useState(true);

    const loadings = () => {
        if (notLoading === true) {
            SetNotLoading(false)
        } else {
            SetNotLoading(true)
        }
    }


    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        employeeName: ''
    });

    console.log(formData)




    return (
        <>









            <section className="py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

                        <div className="flex items-center justify-start ml-7 "  >
                            <Link to={'/manager'}  >
                                <button className='border rounded-full hover:text-[white] hover:bg-[black]' >
                                    <RiArrowLeftLine />
                                </button>
                            </Link>
                        </div>

                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    Add Tasks
                                </h6>
                            </div>

                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">



                            <h6 className="text-blueGray-400 text-lg mt-3 mb-6 font-bold uppercase">
                                Tasks Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full  px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 
                                              mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                            Task Title
                                        </label>
                                        <input onChange={(e) => setFormData({ ...formData, title: e.target.value })} name='title' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg font-extrabold shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-[sans-pro-light]  " placeholder='Task title' />
                                    </div>
                                </div>

                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 
                                              mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                            Task Details
                                        </label>
                                        <textarea
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            name='description'
                                            className="border-0 text-lg font-extrabold font-[sans-pro-light]  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            rows="4"
                                            placeholder='Task Details...'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* section 2 */}
                            <h6 className="text-blueGray-400 text-lg mt-3 mb-6 font-bold uppercase">
                                Task Alerts
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 
                                              mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                            Last Date of Submit Task
                                        </label>
                                        <input
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            name='date'
                                            type="Date"
                                            className="text-lg font-extrabold font-[sans-pro-light] border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* section 2 */}

                            {/* section 3 */}


                            <h6 className="text-blueGray-400 text-lg mt-3 mb-6 font-bold uppercase">
                                Select Employee Assigned Task
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label htmlFor="underline_select" className="block uppercase text-blueGray-600 
                                              mb-2 text-[20px] font-medium">Select Employees</label>
                                        <select onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })} name='select' id="underline_select" className=" text-lg font-extrabold font-[sans-pro-light] border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                            <option selected>Select an Employees</option>
                                            <option >Rashid</option>
                                            <option >Azam</option>
                                            <option >Akram</option>
                                            <option >Najam</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* section 3 */}


                            {notLoading === true ? (<div className='flex items-center justify-center'>
                                <button
                                    onClick={loadings}
                                    // type="submit"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                >
                                    Assign Task
                                </button>
                            </div>
                            ) : (
                                <div onClick={loadings} className="flex items-center justify-center border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 cursor-pointer ">
                                    <div className="  inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[blue] border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                                        <button className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</button>
                                    </div>
                                </div>

                            )}




                        </div>
                    </div>
                    <footer className="relative pt-8 pb-6 mt-2">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        Made<a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Ahsan </a> by <a href="#" className="text-blueGray-500 hover:text-blueGray-800" target="_blank" rel="noopener noreferrer">Astral Developers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div >
            </section >
        </>
    )
}

export default AddTask
