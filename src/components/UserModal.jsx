import { RiCheckDoubleLine, RiCloseLargeFill, RiEdit2Line } from '@remixicon/react';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../config/firebase/firebaseConfig';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const UserModal = ({ user, handleOutsideClick, closeModal }) => {










    const [register, setRegister] = useState({
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        type: user.type,
        imageUrl: user.imageUrl,
        address: user.address,
        qualification: user.qualification,
        position: user.position,
        pastExperience: user.pastExperience,
        salary: user.salary,
        registerId: user.registerId
    });
    





    const handleInput = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    function handleChange(e) {

        setRegister({ ...register, type: e })
    }

    function handleChangePosition(e) {

        setRegister({ ...register, position: e })
    }




    const editData = async (e) => {
        e.preventDefault();
        const data = await setDoc(doc(db, "users", user.id), register);

        let timerInterval;
        Swal.fire({
            title: "Edit Successfully!",
            html: "Edit in  <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });

    }













    return (

        <>
            <div className='max-w-screen-xl mx-auto p-4'>





                <div className="  fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50 h-full w-full" id="modal" onClick={handleOutsideClick}>

                    <div className="relative top-20 mx-auto border w-[98%]  max-w-screen-lg shadow-lg rounded-md bg-gradient-to-bl from-teal-100 to-teal-200 ">
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


                                        <form onSubmit={editData} id="edit-user" className='p-6 mt-12 border border-teal-600 rounded-xl'>

                                            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="first_name" className="">
                                                        Name
                                                    </label>
                                                    <input value={register.name} type="text" name="name" id="first_name" className="rounded border border-gray-300 bg-gray-50" placeholder="John Doe" required onChange={handleInput} />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="email" className="">
                                                        Email
                                                    </label>

                                                    <input value={register.email} type="email" name="email" id="email" className="rounded border border-gray-300 bg-gray-50" placeholder="email@abc.com" required onChange={handleInput} />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <label htmlFor="phone" className="">
                                                        Phone
                                                    </label>

                                                    <input value={register.phoneNumber} type="text" name="phoneNumber" id="phone" className="rounded border border-gray-300 bg-gray-50" placeholder="+920-000-000" required onChange={handleInput} />
                                                </div>



                                                <div>
                                                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        Select an option
                                                    </label>
                                                    <select
                                                        value={register.type}
                                                        onChange={(e) => handleChange(e.target.value)}
                                                        name="option"
                                                        id="type"
                                                        selected
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    >
                                                        <option value="">Choose any one Type</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="Manager">Manager</option>
                                                        <option value="Employee">Employee</option>
                                                    </select>
                                                </div>




                                                <>
                                                    <div className="flex flex-col gap-2">
                                                        <label htmlFor="Address">
                                                            Address
                                                        </label>
                                                        <input value={register.address} name='address' type="text" id="Address" className="rounded border border-gray-300 bg-gray-50" placeholder="Address" required onChange={handleInput} />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <label htmlFor="Qualification">
                                                            Qualification
                                                        </label>
                                                        <input value={register.qualification} name='qualification' type="text" id="Qualification" className="rounded border border-gray-300 bg-gray-50" placeholder="Qualification" required
                                                            onChange={handleInput} />
                                                    </div>




                                                    <div>
                                                        <label htmlFor="Position" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            Select an Position
                                                        </label>
                                                        <select
                                                            value={register.position}
                                                            onChange={(e) => handleChangePosition(e.target.value)}
                                                            name="Position"
                                                            id="Position"
                                                            selected
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        >
                                                            <option value="">Choose any one Position</option>
                                                            <option value="Web">Web</option>
                                                            <option value="Sales">Sales</option>
                                                            <option value="Graphics">Graphics</option>
                                                            <option value="Ui/Ux Designer">Ui/Ux Designer</option>
                                                        </select>
                                                    </div>

                                                    <div className="flex flex-col gap-2">
                                                        <label htmlFor="Past Experience">
                                                            Past Experience
                                                        </label>
                                                        <input value={register.pastExperience} name='pastExperience' type="text" id="Past Experience" className="rounded border border-gray-300 bg-gray-50" placeholder="Past Experience"
                                                            required onChange={handleInput} />
                                                    </div>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                                                        <div className="flex flex-col gap-2 ">
                                                            <label htmlFor="Salary">
                                                                Salary
                                                            </label>
                                                            <input value={register.salary} name='salary' type="number" id="Salary" className="w-full rounded border border-gray-300 bg-gray-50" min={0} maxLength={10} placeholder="Salary" required onChange={handleInput} />
                                                        </div>

                                                        <div className="flex flex-col gap-2 ">
                                                            <label htmlFor="Id">
                                                                ID
                                                            </label>
                                                            <input value={register.registerId} name='registerId' type="text" id="id" className="w-full rounded border border-gray-300 bg-gray-50" min={0} maxLength={10} placeholder="#id" required onChange={handleInput} />
                                                        </div>
                                                    </div>
                                                </>
                                            </div>
                                        </form >
                                    </div>
                                </section >
                            </div>
                            <div className=" flex  items-center justify-center gap-10 px-4 py-3">

                                <button form="edit-user" type='submit' id="ok-btn" className=" rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out">
                                    <RiCheckDoubleLine size={25} />
                                </button>

                                <button id="exit" className=" rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out" onClick={closeModal}>
                                    <RiCloseLargeFill />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default UserModal
