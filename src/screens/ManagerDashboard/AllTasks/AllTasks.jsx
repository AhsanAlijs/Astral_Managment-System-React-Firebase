import React from 'react'
import Task from '../../../components/Tasks'
import { RiDraftFill } from '@remixicon/react'
import { Link } from 'react-router-dom'
import ManagerTask from '../../../components/ManagerTask'

const AllTasks = () => {
    return (
        <main className="max-w-screen-xl mx-auto p-4">
            <div className="flex items-center justify-start mb-3"  >
                <Link Link to={'/manager/addTask'} >
                    <button className=" flex items-center gap-2 w-full rounded-md bg-teal-700 text-white  py-2 px-4 font-semibold hover:bg-teal-800  transition-colors duration-150 ease-in-out" >
                        <RiDraftFill size={23} />
                        Add Task
                    </button>
                </Link >
            </div >

            {/* <Task /> */}

            < ManagerTask />

        </main >

    )
}

export default AllTasks
