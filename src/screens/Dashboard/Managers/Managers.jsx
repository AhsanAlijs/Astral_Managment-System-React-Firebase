import React, { useState } from 'react';

import { RiDeleteBin2Fill, RiEdit2Fill } from '@remixicon/react';

const Managers = () => {

    const managersTypeArray = ['Web', 'Sales', 'Graphics', 'Designer'];

    const [targetEmployee, setTargetEmployee] = useState('Web');

    const managers = [
        {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        },

        {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        },
        {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        }, {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        }, {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        },





        {
            employeeName: 'abc',
            employeeType: 'Sales',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        }, {
            employeeName: 'abc',
            employeeType: 'Graphics',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        },

        {
            employeeName: 'abc',
            employeeType: 'Graphics',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        }, {
            employeeName: 'abc',
            employeeType: 'Graphics',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        }, {
            employeeName: 'abc',
            employeeType: 'Graphics',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        },



        {
            employeeName: 'abc',
            employeeType: 'Designer',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        },
        {
            employeeName: 'abc',
            employeeType: 'Designer',
            employeeEmail: 'abc@gmail.com',
            State: 'Manager',
        }
    ];


    const [arr, setArr] = useState([]);


    const getEmployee = (e) => {
        setTargetEmployee(e)
        let abc = managers.filter((x, i) => x.employeeType == e)
        setArr([...abc])
    };
    // console.log(arr)


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
                                <div className='bg-gradient-to-r from-teal-500 to-50% to-transparent pb-[2px] hover:bg-teal-500 transition-colors 
                                ease-in-out ' >
                                    <button onClick={() => getEmployee(item)} className="pb-2  bg-[#ecfafa] text-xl font-semibold  uppercase  
             ">                     {item}
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>












            <div className="overflow-x-auto lg:overflow-hidden  rounded-lg border  border-gray-200 shadow-md bg-white mt-8">
                {arr.length > 0 ?
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500  ">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Team</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                            </tr>
                        </thead>

                        {arr.map((item, index) =>
                            <tbody key={index} className="divide-y divide-gray-100 border-t border-gray-100 ">
                                <tr className="hover:bg-gray-50">
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                        <div className="relative h-10 w-10">
                                            <img
                                                className="h-full w-full rounded-full object-cover object-center"
                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-medium text-gray-700"> {item.employeeName} </div>
                                            <div className="text-gray-400">{item.employeeEmail}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                            {item.employeeType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">Product Designer</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                                                {item.State}
                                            </span>

                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-4">
                                            <button   >
                                                <RiDeleteBin2Fill size={25} />
                                            </button>

                                            <button data-tooltip="Edit">
                                                <RiEdit2Fill size={25} />
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
