import { RiArrowLeftLine } from '@remixicon/react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase/firebaseConfig';
import { useAuth } from '../screens/AuthProvider';
import Swal from 'sweetalert2';

const AddTask = () => {


    const { user } = useAuth();


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
        department: user.department,
        description: '',
        startDate: '',
        lastDate: '',
        assignee: [],
        status: 'pending',
        managerId: user.id,
        managerName: user.name
    });

    const [allUsers, setAllUser] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const q = query(collection(db, "users"), where("type", "==", "Employee"), where("department", "==", user.department));
            const querySnapshot = await getDocs(q);

            const allUser = []
            querySnapshot.forEach((doc) => {
                allUser.push({ id: doc.id, ...(doc.data()) })
                setAllUser(allUser)
            });



        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }



    const handleSubmit = async () => {
        const docRef = await addDoc(collection(db, "tasks"), formData);
        setFormData({
            title: '',
            department: user.department,
            description: '',
            startDate: '',
            lastDate: '',
            assignee: [],
            status: 'pending',
            managerId: user.id,
            managerName: user.name
        })
        Swal.fire({
            title: "Add task",
            text: "Task successfully assign",
            icon: "success"
        });

    }












    return (
        <main className='max-w-screen-xl mx-auto p-4'>
            <section className="py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-[#e8f9f9] shadow-lg rounded-lg bg-blueGray-100 border-0">

                        <div className="flex items-center justify-start p-4 "  >
                            <Link to={-1} className='rounded-full hover:text-[white] hover:bg-teal-800' >
                                <RiArrowLeftLine />
                            </Link>
                        </div>

                        <div className="rounded-t  mb-0 px-6 py-6">
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
                                        <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} name='title' type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150   " placeholder='Task title' />
                                    </div>
                                </div>

                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 
                                              mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                            Task Details
                                        </label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            name='description'
                                            className="border-0 text-lg  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                                            Start Date of Task
                                        </label>
                                        <input
                                            value={formData.startDate}
                                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                            name='date'
                                            type="Date"
                                            className="text-lg  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* section 2 */}

                            {/* section 3 */}

                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 
                                              mb-2 text-[20px] font-medium" htmlFor="grid-password">
                                            Last Date of Submit Task
                                        </label>
                                        <input
                                            value={formData.lastDate}
                                            onChange={(e) => setFormData({ ...formData, lastDate: e.target.value })}
                                            name='date'
                                            type="Date"
                                            className="text-lg  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        />
                                    </div>
                                </div>
                            </div>





                            {/* section 3 */}




                            {/* section 4 */}


                            <h6 className="text-blueGray-400 text-lg mt-3 mb-6 font-bold uppercase">
                                Select Employee Assigned Task
                            </h6>

                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label htmlFor="underline_select" className="block uppercase text-blueGray-600 mb-2 text-[20px] font-medium">Select Employees</label>
                                        <select value={formData.assignee} onChange={(e) => {
                                            let items = e.target.selectedOptions;
                                            let assigneeArr = [];
                                            for (let i = 0; i < items.length; i++) {
                                                // console.log(items[i].getAttribute('value'))
                                                assigneeArr.push(items[i].getAttribute('value'))
                                            }
                                            setFormData({ ...formData, assignee: assigneeArr })
                                        }} name='select' id="underline_select" className=" text-lg  border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded  shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" multiple>
                                            {allUsers.map((user) => <option key={user.id} value={user.id} >{user.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* section 4 */}


                            {notLoading === true ? (<div className='flex items-center justify-center'>
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="border-0 rounded-md w-full placeholder-blueGray-300 text-blueGray-60 bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800 "
                                >
                                    Assign Task
                                </button>
                            </div>
                            ) : (
                                <div className="flex items-center justify-center border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-lg shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 cursor-pointer ">
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
        </main>
    )
}

export default AddTask
