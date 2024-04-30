import { RiCheckDoubleLine, RiCloseLargeFill, RiEdit2Line } from '@remixicon/react';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../config/firebase/firebaseConfig';
import Swal from 'sweetalert2';

const Modal = ({ closeModal, handleOutsideClick, task }) => {

    console.log(task.id);


    const [formData, setFormData] = useState({
        title: task.title,
        description: task.description,
        startDate: task.startDate,
        lastDate: task.lastDate,
        assignee: task.assignee,
        status: task.status,
        managerId: task.managerId,
    });

    console.log(formData);



    const editData = async (e) => {
        e.preventDefault();
        const data = await setDoc(doc(db, "tasks", task.id), formData);
        console.log(data);

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


                                        <form onSubmit={editData} id='editTask' className='flex flex-wrap' >
                                            <div className="w-full  lg:w-12/12 px-4">
                                                <div className="relative lg:w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                                        Edit Task Title
                                                    </label>
                                                    <input
                                                        value={formData.title}
                                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                        name='title'
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
                                                        value={formData.description}
                                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                        name='description'
                                                        className="border-0  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        rows="4"
                                                        placeholder='Edit Task Details...'
                                                    />
                                                </div>
                                            </div>


                                            <div className="w-full  lg:w-12/12 px-4">
                                                <div className="relative lg:w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                                        Edit Task LastDate
                                                    </label>
                                                    <input
                                                        type="Date"
                                                        value={formData.lastDate}
                                                        onChange={(e) => setFormData({ ...formData, lastDate: e.target.value })}
                                                        name='title'
                                                        className="border-0 text-lg   px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full  ease-linear transition-all duration-150"
                                                        rows="4"
                                                        placeholder='Edit Task Title'
                                                    />
                                                </div>
                                            </div>







                                        </form>
                                    </div>
                                </section >


                            </div>
                            <div className=" flex  items-center justify-center gap-10 px-4 py-3">

                                <button type='submit' form='editTask' id="ok-btn" className=" rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out">
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

export default Modal
