import React, { useState } from 'react';

import { RiDeleteBin2Fill, RiEdit2Fill, RiEdit2Line, RiInformationLine } from '@remixicon/react';
import { useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db, storage } from '../../../config/firebase/firebaseConfig';
import UserModal from '../../../components/UserModal';
import { deleteObject, ref as sRef } from "firebase/storage";
import Swal from 'sweetalert2';


const Managers = () => {

    const managersTypeArray = ['Development', 'Sales', 'Graphics', 'Ui/Ux Designer'];

    const [targetEmployee, setTargetEmployee] = useState('Development');

    const [managerArray, setManagerArray] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])


    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const openModal = (item) => {
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











    const getAllUsers = async () => {

        try {
            const q = query(collection(db, "users"), where("type", "==", "Manager"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                managerArray.push({ id: doc.id, ...(doc.data()) })
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const deleteDocUser = async (user) => {
        await deleteDoc(doc(db, "users", user.id));

        const desertRef = sRef(storage, user.email);
        try {
            await deleteObject(desertRef);
        } catch (error) {
            console.log('Uh-oh, an error occurred!', error);
        }

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Deleted Successfully!"
        });
        getAllUsers()
    }





    const [arr, setArr] = useState([]);


    const getEmployee = (e) => {
        setTargetEmployee(e)
        let abc = managerArray.filter((x, i) => x.department == e)
        setArr([...abc])
    };



    return (
        <main className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-4xl max-sm:text-3xl font-semibold  text-center mt-4 text-teal-600  uppercase  
            [-webkit-text-stroke:1px_#333]  ">
                Manager list
            </h1>

            <div className="border-gray-200 mt-6">

                <ul className="flex  gap-4 justify-center text-sm font-medium text-center sm:text-center " id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-inactive-classes=" text-gray-500 hover:text-gray-600  border-gray-100 hover:border-gray-300 " role="tablist">


                    {managersTypeArray.map((item, index) => {
                        return (
                            <li key={index} className=''  >
                                <div className='bg-gradient-to-r from-teal-500 to-0% to-transparent pb-[2px] hover:bg-teal-500
                                 transition-colors duration-300 ease-in-out ' >
                                    <button onClick={() => getEmployee(item)}
                                        className="pb-2  bg-[#ecfafa] text-base font-semibold  uppercase  ">
                                        {item}
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="overflow-x-auto lg:overflow-hidden  rounded-lg border  border-gray-200 shadow-md bg-white mt-8">
                {modalOpen && (<UserModal closeModal={closeModal} user={selectedUser} handleOutsideClick={handleOutsideClick} />)}
                {arr.length > 0 ?
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500  ">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Salary</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">{arr.length}</th>
                            </tr>
                        </thead>

                        {arr.map((item, index) =>
                            <tbody key={index} className="divide-y divide-gray-100 border-t border-gray-100 ">
                                <tr className="hover:bg-gray-50">
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                        <div className="relative h-10 w-10">
                                            <img
                                                className="h-full w-full rounded-full object-cover object-center"
                                                src={item.imageUrl}
                                                alt=""
                                            />
                                            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-medium text-gray-700"> {item.name} </div>
                                            <div className="text-gray-400">{item.email}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                            {item.position}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{item.type}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                                                PKR {item.salary}
                                            </span>

                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-4">
                                            <button onClick={(e) => deleteDocUser(item)}  >
                                                <RiDeleteBin2Fill size={25} />
                                            </button>

                                            <button className=" text-teal-500 " onClick={() => { openModal(item) }}>
                                                <RiEdit2Line size={35} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                    :
                    <h2 className='p-4 text-center' >
                        Please Select Any one tab and see the selected information...
                    </h2>
                }
            </div>



















            {/* {employees.map((item, index) => {
                if (item.employeeType === targetEmployee) {
                    return (
                        <Table
                            name={item.employeeName}
                            email={item.employeeEmail}
                            roll={item.State}
                            employee={item.employeeType}
                            key={index}
                        />
                    );
                }

                return null;
            })} */}








        </main>
    )
}

export default Managers
