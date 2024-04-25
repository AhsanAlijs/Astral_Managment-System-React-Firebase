import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../../config/firebase/firebaseConfig';



const CreateEmployee = () => {

  const [isNotAdmin, setIsNotAdmin] = useState(false)

  const [register, setRegister] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    type: '',
    file: '',
    address: '',
    qualification: '',
    position: '',
    PastExperience: '',
    joiningDate: '',
    salary: ''
  });






  function handleChange(e) {
    if (e == "Admin") setIsNotAdmin(false)
    else setIsNotAdmin(true);
    setRegister({ ...register, type: e })
  }





  // image preview is start
  const [previewImg, setPreviewImg] = useState("https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setRegister({ ...register, file: file })


    reader.onload = function (e) {
      setPreviewImg(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const navigate = useNavigate();



  const registerUser = (e) => {
    e.preventDefault();


    createUserWithEmailAndPassword(auth, register.email, register.password)
      .then((userCredential) => {
        const user = userCredential.user;


        const file = register.file;

        const storageRef = ref(storage, `${register.email}`);
        return uploadBytes(storageRef, file)
          .then(async (snapshot) => {
            console.log('Upload successful!', snapshot);
            try {
              const url = await getDownloadURL(snapshot.ref)


              try {
                const docRef = await setDoc(doc(db, "users", user.uid), {
                  name: register.name,
                  email: register.email,
                  type: register.type,
                  phoneNumber: register.phoneNumber,
                  imageUrl: url,
                  // uid: user.uid
                });
                // console.log("Document Added ", docRef.id);
                navigate('/')
              } catch (e) {
                console.error("Error adding document: ", e);
              }

            } catch (error) {
              console.log(error);
            }
          })
          .catch((error) => {
            console.error('Error uploading image:', error);

          });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });








    console.log(register);

  }

  return (
    <>
      <div className='max-w-screen-xl mx-auto px-4 mt-[50px] '>
        <div className='main-header flex items-center justify-center'>

          <div className='border rounded-[10px] p-[20px]  lg:flex lg:items-center lg:gap-20 lg:flex-row max-2xl:gap-20 flex flex-col items-center gap-4'>
            <div className='shrink-0'>
              <img src="/logo.png" alt="Logo" className='p-[6px] sm:m-[0, auto] w-[80px] sm:w-[150px]' />
            </div>

            <div className='text-center'>
              <p className='font-bold text-[#252525] lg:text-[50px] sm:text-start text-center md:text-[30px] text-[20px]'>Astral Employee Registration Form</p>
            </div>
          </div>

        </div>
      </div>

      <div className='mt-12 px-4 max-w-screen-xl mx-auto'>
        <form onSubmit={(e) => registerUser(e)} className='p-5 lg:p-10  border rounded-xl '>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" name="name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" required onChange={(e) => setRegister({ ...register, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exmaple@gmail.com" required onChange={(e) => setRegister({ ...register, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="Phone number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
              <input name='number' type="tel" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone number" minLength={0} maxLength={11} required onChange={(e) => setRegister({ ...register, phoneNumber: e.target.value })} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input name='password' type="password" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required onChange={(e) => setRegister({ ...register, password: e.target.value })} />
            </div>


            <div>
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an option
              </label>
              <select
                onChange={(e) => handleChange(e.target.value)}
                name="option"
                id="type"
                selected
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              >
                <option value="">Choose any one Type</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <img id='preview_img' className="h-16 w-16 border-[1px] object-cover rounded-full" src={previewImg} alt="Current profile photo" />
              </div>

              <label className="">
                <span className="sr-only">Choose profile photo</span>
                <input name='file' type="file" onChange={handleFileChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00e5ba] file:text-violet-700 hover:file:bg-[#00e5ba]"/>
              </label>
            </div>

            {
              isNotAdmin &&
              (
                <>
                  <div>
                    <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input name='address' type="text" id="Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required onChange={(e) => setRegister({ ...register, address: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="Qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification</label>
                    <input name='qualification' type="text" id="Qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qualification" required
                      onChange={(e) => setRegister({ ...register, qualification: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="Position" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                    <input name='position' type="text" id="Position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Position" required onChange={(e) => setRegister({ ...register, position: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="Past Experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Past Experience</label>
                    <input name='pastExperience' type="text" id="Past Experience" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Past Experience"
                      required onChange={(e) => setRegister({ ...register, PastExperience: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="Joining Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Joining Date</label>
                    <input name='joiningDate' type="date" id="Joining Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joining Date" required onChange={(e) => setRegister({ ...register, joiningDate: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="Salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                    <input name='salary' type="number" id="Salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={0} maxLength={10} placeholder="Salary" required onChange={(e) => setRegister({ ...register, salary: e.target.value })} />
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

            <button type="submit" className="text-[#000] bg-[#00e5ba] hover:bg-[#00e5ba] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>

        </form>
      </div>



    </>
  )
}

export default CreateEmployee
