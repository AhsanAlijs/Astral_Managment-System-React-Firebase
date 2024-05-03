import { RiDeleteBin7Fill, RiEdit2Line } from '@remixicon/react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase/firebaseConfig';
import { useAuth } from '../screens/AuthProvider';
import DeletedModal from './DeletedModal';
import Modal from './Modal';














const Tasks = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null)
    const { user } = useAuth();

    const openModal = (item) => {
        setModalOpen(true);
        setSelectedTask(item);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const handleOutsideClick = (event) => {
        if (event.target.id === 'modal') {
            setModalOpen(false);
        }
    };
    const [allUser, setAllUser] = useState([])


    const getData = async () => {
        try {
            const q = query(collection(db, "tasks"), where('department', "==", user.department));

            const querySnapshot = await getDocs(q);

            const allTask = []

            querySnapshot.forEach(async (doc) => {
                const taskData = doc.data()

                const users = query(collection(db, "users"));

                const userSnapshot = await getDocs(users);
                const taskUser = []
                userSnapshot.forEach((users) => {
                    const userData = users.data();
                    if (taskData.assignee.includes(users.id)) {
                        taskUser.push({ id: users.id, ...userData });
                    }
                });
                allTask.push({ ...taskData, id: doc.id, assignee: taskUser })
                // console.log(allTask);
                setAllUser(allTask);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const closeDeleteModal = async () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        getData()

    }, [])




    const [isModalOpen, setIsModalOpen] = useState(false);

    const [deleteTask, setDeleteTask] = useState(null)


    const openDeleteModal = (item) => {
        setIsModalOpen(true);
        setDeleteTask(item)
    };





    return (
        <>

            <main className="max-w-screen-2xl mx-auto p-2">
                <div className="mt-10 max-w-screen-md mx-auto">
                    <ul className="flex flex-col gap-5">

                        {isModalOpen && (<DeletedModal closeDeleteModal={closeDeleteModal} getData={getData} deleteTask={deleteTask} />)}

                        {modalOpen && (<Modal closeModal={closeModal} task={selectedTask} handleOutsideClick={handleOutsideClick} />)}


                        {allUser.map((item) => {
                            return (
                                <li key={item.id} >
                                    <article className="border p-6 rounded-md shadow-md">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-2xl font-bold text-neutral-800">
                                                {item.title}</h2>


                                            {item.status === 'pending' ? (
                                                <p key={item.id} className="px-2 py-1 rounded-full bg-yellow-200 text-yellow-800 text-xs font-medium">
                                                    {item.status}
                                                </p>
                                            ) : item.status === 'In Progress' ? (
                                                <p key={item.id} className="px-2 py-1 rounded-full bg-orange-200 text-orange-800 text-xs font-medium">
                                                    {item.status}
                                                </p>
                                            ) : (
                                                <p className="px-2 py-1 rounded-full bg-green-200 text-green-800 text-xs font-medium">
                                                    {item.status}
                                                </p>
                                            )}




                                        </div>

                                        <div className="text-sm flex gap-6 text-neutral-500 mt-2">
                                            <time>{item.startDate}</time>
                                            -
                                            <time>{item.lastDate}</time>
                                        </div>

                                        <p className="mt-6 break-words">
                                            {item.description}
                                        </p>

                                        <p className="mt-4 flex gap-4 items-center">
                                            <img src="/logo.png" alt="" className="size-12 rounded-full overflow-hidden" />
                                            <span>
                                                {item.managerName}
                                            </span>
                                        </p>

                                        <ul className="text-sm flex flex-col gap-1 list-disc list-inside mt-4 [&_p]:inline">
                                            {item.assignee.map((item) => (
                                                <li key={item.id}>
                                                    <p>{item.name}</p>
                                                </li>
                                            ))}

                                        </ul>

                                        <div className='flex items-center justify-end gap-10' >

                                            <button className=" text-teal-500 " title={'open modal'} onClick={() => { openModal(item) }}>
                                                <RiEdit2Line size={24} />
                                            </button>
                                            <button className='text-teal-500' title={'delete'} onClick={() => openDeleteModal(item)}  > <RiDeleteBin7Fill size={24} /> </button>
                                        </div>
                                    </article>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}

// onClick={(e) => deleteTask(item)}

export default Tasks
