import React, { useState } from 'react'
import Modal from './Modal';
import { RiDeleteBackFill, RiDeleteBin7Fill, RiEdit2Line } from '@remixicon/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase/firebaseConfig';














const Tasks = ({ title, description, startDate, lastDate }) => {









    const [modalOpen, setModalOpen] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null)




    const openModal = () => {
        setModalOpen(true);
        setSelectedUser(item);
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
            const q = (collection(db, "tasks"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                const allTask = []
                allTask.push({ id: doc.id, ...(doc.data()) })
                setAllUser(allTask, ...allUser)
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    useState(() => {
        getData()

    }, [])












    return (
        <>

            <main className="max-w-screen-2xl mx-auto p-2">
                <div className="mt-10 max-w-screen-md mx-auto">
                    <ul className="flex flex-col gap-5">
                        <li>


                            {allUser.map((item) => {
                                return (
                                    <article key={item.id} className="border p-6 rounded-md shadow-md">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-2xl font-bold text-neutral-800">
                                                {item.title}                                    </h2>
                                            <p className="px-2 py-1 rounded-full bg-yellow-200 text-yellow-800 text-xs font-medium">
                                                Pending
                                            </p>
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
                                                Manager name
                                            </span>
                                        </p>

                                        <ul className="text-sm flex flex-col gap-1 list-disc list-inside mt-4 [&_p]:inline">
                                            <li>
                                                <p>Employee 1</p>
                                            </li>
                                            <li>
                                                <p>Employee 2</p>
                                            </li>
                                            <li>
                                                <p>Employee 3</p>
                                            </li>
                                        </ul>
                                        {modalOpen && (<Modal closeModal={closeModal} user={selectedUser} handleOutsideClick={handleOutsideClick} />)}
                                        <div className='flex items-center justify-end gap-10' >

                                            <button className=" text-teal-500 " title={'open modal'} onClick={() => { openModal(item) }}>
                                                <RiEdit2Line size={24} />
                                            </button>
                                            <button className='text-teal-500' title={'delete'} > <RiDeleteBin7Fill size={24} /> </button>

                                        </div>

                                    </article>
                                )
                            })}



                        </li>

                    </ul>
                </div>
            </main>
        </>
    )
}

export default Tasks
