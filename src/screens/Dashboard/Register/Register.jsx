import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateEmployee = () => {
  const [isNotAdmin, setIsNotAdmin] = useState(false)

  function handleChange(e) {
    // const type = selectType.current.value
    if (e.target.value === "Admin") setIsNotAdmin(false)
    else setIsNotAdmin(true);
  }



  return (
    <>
      <div className='max-w-screen-xl mx-auto px-4 mt-[50px] '>
        <div className='main-header flex items-center justify-center'>

          <div className='border rounded-[10px] p-[20px]  lg:flex lg:items-center lg:gap-20 lg:flex-row max-2xl:gap-20 flex flex-col items-center gap-4   '>
            <div className='shrink-0'>
              <img src="/logo.png" alt="Logo" className='p-[6px] sm:m-[0, auto] w-[80px] sm:w-[150px]' />
            </div>

            <div className='text-center'>
              <p className='font-bold text-[#252525] lg:text-[50px] sm:text-start text-center md:text-[30px] text-[20px]'>Astral Employee Registration Form</p>
              <p className='text-[#373A3C]  lg:text-[20px] lg:w-[80%] sm:text-start text-center sm:text-[15px]'>Please fill out the form for an HR department to complete your registration. An HR manager will contact you with further instructions.</p>
            </div>
          </div>

        </div>
      </div>

      <div className='mt-12 px-4 max-w-screen-xl mx-auto'>
        <form className='p-5 lg:p-10  border rounded-xl '>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" required />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exmaple@gmail.com" required />
            </div>
            <div>
              <label for="Phone numer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone numer</label>
              <input type="tel" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone numer" minLength={0} maxLength={11} required />
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
            </div>
            <div>
              <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select onChange={handleChange} name='option' id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose any one Type</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            {
              isNotAdmin &&
              (
                <>
                  <div>
                    <label for="Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                  </div>
                  <div>
                    <label for="Qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification</label>
                    <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qualification" required />
                  </div>
                  <div>
                    <label for="Position" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                    <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Position" required />
                  </div>
                  <div>
                    <label for="Past Experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Past Experience</label>
                    <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Past Experience" required />
                  </div>
                  <div>
                    <label for="Joining Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Joining Date</label>
                    <input type="date" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joining Date" required />
                  </div>
                  <div>
                    <label for="Salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                    <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={0} maxLength={10} placeholder="Salary" required />
                  </div>
                </>
              )
            }


          </div>


          <div className='flex items-center justify-center flex-col'>
            <div className="flex items-start mb-6 ">
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account yet?
                <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500"  >Sign in</Link>
              </p>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>

        </form>
      </div>



    </>
  )
}

export default CreateEmployee
