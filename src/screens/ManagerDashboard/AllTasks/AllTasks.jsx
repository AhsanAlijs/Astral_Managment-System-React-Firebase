import React, { useState } from 'react'
import Task from '../../../components/Tasks'
import { RiAlignItemBottomFill, RiDraftFill } from '@remixicon/react'
import { Link } from 'react-router-dom'
import ManagerTask from '../../../components/ManagerTask'
import Tasks from '../../../components/Tasks'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase/firebaseConfig'

const AllTasks = () => {


    // console.log(allUser);





    return (
        <main className="max-w-screen-xl mx-auto p-4">
            <div className="flex items-center justify-start mb-3"  >
                <Link Link to={'/manager/addTask'} className='flex items-center gap-2 rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out' >
                    <RiDraftFill size={23} />
                    Add Task
                </Link >
            </div >


            <Tasks />

        </main >

    )
}

export default AllTasks
