import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
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


  const handleInput = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
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

  }

  return (
    <main className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl max-sm:text-3xl font-semibold uppercase text-center mt-4">
        Create user
      </h1>

      <form onSubmit={(e) => registerUser(e)} className='p-6 mt-12 border border-teal-600 rounded-xl'>

        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="first_name" className="">
              Name
            </label>
            <input type="text" name="name" id="first_name" className="rounded border border-gray-300 bg-gray-50" placeholder="John Doe" required onChange={handleInput} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="">
              Email
            </label>

            <input type="email" name="email" id="email" className="rounded border border-gray-300 bg-gray-50" placeholder="email@abc.com" required onChange={handleInput} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="">
              Phone
            </label>

            <input type="text" name="phone" id="phone" className="rounded border border-gray-300 bg-gray-50" placeholder="+920-000-000" required onChange={handleInput} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="">
              Password
            </label>

            <input type="password" name="password" id="password" className="rounded border border-gray-300 bg-gray-50" placeholder="******" required onChange={handleInput} />
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

          <div className="flex gap-2 items-center overflow-hidden">
            <div className="shrink-0">
              <img id='preview_img' className="size-14 border object-cover rounded-full" src={previewImg} alt="Current profile photo" />
            </div>

            <label className="">
              <span className="sr-only">Choose profile photo</span>
              <input name='file' type="file" onChange={handleFileChange} className="file:bg-teal-600 " />
            </label>
          </div>

          {isNotAdmin &&
            (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Address">
                    Address
                  </label>
                  <input name='address' type="text" id="Address" className="rounded border border-gray-300 bg-gray-50" placeholder="Address" required onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Qualification">
                    Qualification
                  </label>
                  <input name='qualification' type="text" id="Qualification" className="rounded border border-gray-300 bg-gray-50" placeholder="Qualification" required
                    onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Position">
                    Position
                  </label>
                  <input name='position' type="text" id="Position" className="rounded border border-gray-300 bg-gray-50" placeholder="Position" required onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Past Experience">
                    Past Experience
                  </label>
                  <input name='pastExperience' type="text" id="Past Experience" className="rounded border border-gray-300 bg-gray-50" placeholder="Past Experience"
                    required onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Joining Date">
                    Joining Date
                  </label>
                  <input name='joiningDate' type="date" id="Joining Date" className="rounded border border-gray-300 bg-gray-50" placeholder="Joining Date" required onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Salary">
                    Salary
                  </label>
                  <input name='salary' type="number" id="Salary" className="rounded border border-gray-300 bg-gray-50" min={0} maxLength={10} placeholder="Salary" required onChange={handleInput} />
                </div>
              </>
            )
          }
        </div>
        <div className='flex items-center justify-center flex-col mt-4'>
          <div className="flex items-start mb-6 ">
            <p className="text-sm font-light text-gray-500">
              Already have an account yet?
              <Link to="/" className="font-medium text-primary-600 hover:underline"  >Sign in</Link>
            </p>
          </div>

          <button type="submit"
            className="text-white bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg px-6 py-3">Submit</button>
        </div>
      </form>
    </main>
  )
}

export default CreateEmployee
