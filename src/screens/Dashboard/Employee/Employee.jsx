import React, { useState } from 'react';
import Table from '../../../components/Table';

const Employee = () => {

    const employeesTypeArray = ['Web', 'Sales', 'Graphics', 'Designer'];

    const [targetEmployee, setTargetEmployee] = useState('Web');

    const employees = [
        {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        },

        {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        },
        {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        }, {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        }, {
            employeeName: 'abc',
            employeeType: 'Web',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        },





        {
            employeeName: 'abc',
            employeeType: 'Sales',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        }, {
            employeeName: 'abc',
            employeeType: 'Graphics',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        },

        {
            employeeName: 'abc',
            employeeType: 'Graphics',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        }, {
            employeeName: 'abc',
            employeeType: 'Graphics',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        }, {
            employeeName: 'abc',
            employeeType: 'Graphics',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        },



        {
            employeeName: 'abc',
            employeeType: 'Designer',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        },
        {
            employeeName: 'abc',
            employeeType: 'Designer',
            employeeEmail: 'abc@gmail.com',
            State: 'employee',
        }
    ];


    const [arr, setArr] = useState([]);


    const getEmployee = (e) => {
        setTargetEmployee(e)
        let abc = employees.filter((x, i) => x.employeeType == e)
        setArr([...abc])
    };
    // console.log(arr)


    return (
        <>
            <div>
                <p className='lg:text-[30px] md:text-[25px] text-[13px]  font-[sans-pro] '>List Of Employee Type</p>
            </div>

            <div className='border'>
            </div>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700 lg:flex lg:items-center lg:justify-center">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center sm:text-center " id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">


                    {employeesTypeArray.map((item, index) => {
                        return (
                            <li key={index} className="me-2" role="presentation"  >
                                <button onClick={() => getEmployee(item)} className="inline-block lg:p-4 p-2 border-b-2 rounded-t-lg text-[12px] font-[sans-pro] lg:text-[18px]  " id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                    {item}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>


            {arr.length > 0 ? (arr.map((item, index) =>
                <Table
                    name={item.employeeName}
                    email={item.employeeEmail}
                    roll={item.State}
                    employee={item.employeeType}
                    key={index}
                />

            )) : (<h1 className='text-center text-lg' >Please Select Any one tab and see the selected information...</h1>)}


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








        </>
    )
}

export default Employee
