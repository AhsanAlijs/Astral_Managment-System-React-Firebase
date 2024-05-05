import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseConfig';
import { useAuth } from '../../AuthProvider';
import DeletedModal from '../../../components/DeletedModal';
import Swal from 'sweetalert2';

const EmployeeTasks = () => {
    const { user } = useAuth();
    const [task, setTask] = useState([]);
    const [taskUser, setTaskUser] = useState([]);

    const getData = async () => {
        if (!user.id) return

        try {
            const q = query(collection(db, "tasks"), where("assignee", "array-contains", user.id));
            const taskSnapshot = await getDocs(q);

            const allUserTasks = []

            taskSnapshot.forEach(async (doc) => {
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


                allUserTasks.push({ ...taskData, id: doc.id, assignee: taskUser })

                setTask(allUserTasks)
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    // console.log(taskUser);

    useEffect(() => {
        getData()
    }, [])

    const status = async (item) => {
        const washingtonRef = doc(db, "tasks", item.id);
        let status;
        if (item.status === 'pending') {
            status = 'In Progress'
        } else {
            status = 'Completed'
        }

        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            status

        });
        // console.log('status change successfully');
        getData()
        let timerInterval;
        Swal.fire({
            title: "Generate Progress",
            html: "I will close in <b></b> milliseconds.",
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
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }




    if (!task) {
        return null
    }

    return (
        <>

            <main className="max-w-screen-2xl mx-auto p-2">
                <div className="mt-10 max-w-screen-md mx-auto">
                    <ul className="flex flex-col gap-5">

                        {task.map((item) => {
                            return (
                                <li key={item.id} >
                                    <article className="border p-6 rounded-md shadow-md">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-2xl font-bold text-neutral-800 [word-break:break-word]">
                                                {item.title}
                                            </h2>

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
                                            {
                                                item.assignee.map((s) => (
                                                    <div>
                                                        <li>
                                                            <p>{s.name}</p>
                                                        </li>
                                                    </div>
                                                ))
                                            }
                                        </ul>

                                        <div className='flex items-center justify-end '>

                                            {
                                                item.status === 'pending' ? (
                                                    <button onClick={(e) => status(item)} className='px-2 py-1 rounded-full bg-teal-800 text-white text-xs font-medium'>
                                                        In Progress
                                                    </button>
                                                ) : item.status === 'In Progress' ? (
                                                    <button onClick={(e) => status(item)} className='px-2 py-1 rounded-full bg-teal-800 text-white text-xs font-medium'>
                                                        Completed
                                                    </button>
                                                ) : (
                                                    <button onClick={(e) => status(item)} className='hidden px-2 py-1 rounded-full bg-teal-800 text-white text-xs font-medium'>
                                                        Completed
                                                    </button>
                                                )
                                            }

                                        </div>

                                    </article>
                                </li>
                            )
                        })}



                    </ul>
                </div>

            </main >
        </>
    )
}

export default EmployeeTasks
