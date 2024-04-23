import React from 'react'
import Task from '../../../components/Tasks'
import { RiDraftFill } from '@remixicon/react'
import { Link } from 'react-router-dom'

const AllTasks = () => {
    return (
        <>
            <div className="flex items-center justify-start mb-3"  >
                <Link to={'/manager/addTask'}  >
                    <button className='border rounded-full hover:text-[white] p-2 hover:bg-[black] flex ' >
                        <RiDraftFill size={23} />
                        <span className="text-[18px] font-[500]" >Add Task</span>
                    </button>
                </Link>
            </div>
            <Task />
            
        </>

    )
}

export default AllTasks
