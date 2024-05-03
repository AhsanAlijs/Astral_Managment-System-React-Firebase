import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
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
    department: '',
    position: '',
    joiningDate: '',
    salary: '',
    registerId: '',
    cnic: '',

    cvFile: '',
    cnicImage: '',
    offerLetter: '',

  });


  console.log(register);



  function handleChange(e) {
    if (e == "Admin") setIsNotAdmin(false)
    else setIsNotAdmin(true);
    setRegister({ ...register, type: e })
  }


  const handleInput = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }


  const handleDepartment = (e) => {
    setRegister({ ...register, department: e })
  }

  const handlePosition = (e) => {
    setRegister({ ...register, position: e })
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


  const [previewCv, setPreviewCv] = useState("https://i.etsystatic.com/42246844/r/il/947e50/4906906138/il_570xN.4906906138_kk2e.jpg");

  const handleFileChangeCv = (event) => {
    const cvFile = event.target.files[0];
    const reader = new FileReader();
    setRegister({ ...register, cvFile: cvFile })


    reader.onload = function (e) {
      setPreviewCv(e.target.result);
    };

    if (cvFile) {
      reader.readAsDataURL(cvFile);
    }
  };

  const [previewId, setPreviewId] = useState("https://www.bolnews.com/wp-content/uploads/2024/01/FotoJet-55-635x430.jpg");

  const handleFileChangeCnic = (event) => {
    const cnicFile = event.target.files[0];
    const reader = new FileReader();
    setRegister({ ...register, cnicImage: cnicFile })


    reader.onload = function (e) {
      setPreviewId(e.target.result);
    };

    if (cnicFile) {
      reader.readAsDataURL(cnicFile);
    }
  };

  const [previewOfferlatter, setPreviewOfferlatter] = useState("https://i.pinimg.com/236x/bf/b9/26/bfb926b26fc7b4875fc71507789f9e49.jpg");

  const handleFileChangeOfferlatter = (event) => {
    const offerLatterfile = event.target.files[0];
    const reader = new FileReader();
    setRegister({ ...register, offerLetter: offerLatterfile })


    reader.onload = function (e) {
      setPreviewOfferlatter(e.target.result);
    };

    if (offerLatterfile) {
      reader.readAsDataURL(offerLatterfile);
    }
  };





  const registerUser = (e) => {
    e.preventDefault();


    createUserWithEmailAndPassword(auth, register.email, register.password)
      .then(async (userCredential) => {
        try {
          const user = userCredential.user;
          const file = register.file;
          const cvFile = register.cvFile;
          const cnicImage = register.cnicImage;
          const offerLetter = register.offerLetter;

          const avatarStorageRef = ref(storage, `${register.email}`);
          const avatarSnapshot = await uploadBytes(avatarStorageRef, file)
          const avatarUrl = await getDownloadURL(avatarSnapshot.ref)

          const cvStorageRef = ref(storage, `/cv/${register.email}`);
          const cvSnapshot = await uploadBytes(cvStorageRef, cvFile)
          const cvUrl = await getDownloadURL(cvSnapshot.ref)

          const cnicStorageRef = ref(storage, `/cnic/${register.email}`);
          const cnicSnapshot = await uploadBytes(cnicStorageRef, cnicImage)
          const cnicUrl = await getDownloadURL(cnicSnapshot.ref)

          const offerStorageRef = ref(storage, `/offer/${register.email}`);
          const offerSnapshot = await uploadBytes(offerStorageRef, offerLetter)
          const offerUrl = await getDownloadURL(offerSnapshot.ref)


          const docRef = await setDoc(doc(db, "users", user.uid), {
            name: register.name,
            email: register.email,
            type: register.type,
            phoneNumber: register.phoneNumber,
            imageUrl: avatarUrl,
            address: register.address,
            qualification: register.qualification,
            department: register.department,
            position: register.position,
            joiningDate: register.joiningDate,
            salary: register.salary,
            registerId: register.registerId,
            cnic: register.cnic,
            cvUrl,
            cnicImage: cnicUrl,
            offerLetter: offerUrl

          });


          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New Employee has been created successfully",
            showConfirmButton: false,
            timer: 1500
          });





        } catch (e) {
          console.error("Error adding document: ", e);
        }


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

            <input type="text" name="phoneNumber" id="phone" className="rounded border border-gray-300 bg-gray-50" placeholder="+920-000-000" required onChange={handleInput} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="">
              Password
            </label>

            <input type="password" name="password" id="password" className="rounded border border-gray-300 bg-gray-50" placeholder="******" required onChange={handleInput} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cnic" className="">
              Cnic
            </label>

            <input type="number" name="cnic" id="cnic" className="rounded border border-gray-300 bg-gray-50" placeholder="42101-1587491-7" required onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Employee  Type
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
            <label htmlFor="fileInput" className="cursor-pointer">
              <span className="sr-only">Choose profile photo</span>
              <input
                id="fileInput"
                name='file'
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="file-upload-button bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">Upload Profile Image</span>
            </label>
          </div>


          <div className="flex gap-2 items-center overflow-hidden">
            <div className="shrink-0">
              <img id='preview_img1' className="size-14 border object-cover rounded-full" src={previewCv} alt="Current profile photo" />
            </div>
            <label htmlFor="fileInput1" className="cursor-pointer">
              <span className="sr-only">Choose Cv</span>
              <input
                id="fileInput1"
                name='file' type="file" onChange={handleFileChangeCv}
                className="hidden"
              />
              <span className="file-upload-button bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">Upload Employee CV</span>
            </label>
          </div>


          {isNotAdmin &&
            (
              <>




                <div className="flex gap-2 items-center overflow-hidden">
                  <div className="shrink-0">
                    <img id='preview_img2' className="size-14 border object-cover rounded-full" src={previewId} alt="Current profile photo" />
                  </div>
                  <label htmlFor="fileInput2" className="cursor-pointer">
                    <span className="sr-only">Upload Profile Image</span>
                    <input
                      id="fileInput2"
                      name='cnicImage'
                      type="file"
                      onChange={handleFileChangeCnic}
                      className="hidden"
                    />
                    <span className="file-upload-button bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">Upload Employee CNIC Front</span>
                  </label>
                </div>



                <div className="flex gap-2 items-center overflow-hidden">
                  <div className="shrink-0">
                    <img id='preview_img3' className="size-14 border object-cover rounded-full" src={previewOfferlatter} alt="Current profile photo" />
                  </div>
                  <label htmlFor="fileInput3" className="cursor-pointer">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      id="fileInput3"
                      name='offerLetter'
                      type="file"
                      onChange={handleFileChangeOfferlatter}
                      className="hidden"
                    />
                    <span className="file-upload-button bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">Upload Employee Offer letter</span>
                  </label>
                </div>








                <div className="flex flex-col gap-2">
                  <label htmlFor="Address">
                    Employee Address
                  </label>
                  <input name='address' type="text" id="Address" className="rounded border border-gray-300 bg-gray-50" placeholder="Address" required onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Qualification">
                    Employee Qualification
                  </label>
                  <input name='qualification' type="text" id="Qualification" className="rounded border border-gray-300 bg-gray-50" placeholder="Qualification" required
                    onChange={handleInput} />
                </div>




                <div>
                  <label htmlFor="Department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Employee Department
                  </label>
                  <select
                    onChange={(e) => handleDepartment(e.target.value)}
                    name="department"
                    id="Department"
                    selected
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Choose any one Department</option>
                    <option value="Development">Development</option>
                    <option value="Sales">Sales</option>
                    <option value="Graphics">Graphics</option>
                    <option value="Ui/Ux Designer">Ui/Ux Designer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="Position" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Employee Position
                  </label>
                  <select
                    onChange={(e) => handlePosition(e.target.value)}
                    name="position"
                    id="Position"
                    selected
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Choose any one Position</option>
                    <option value="Senior">Senior</option>
                    <option value="Junior">Junior</option>
                    <option value="Internee">Internee</option>
                  </select>
                </div>





                <div className="flex flex-col gap-2">
                  <label htmlFor="Joining Date">
                    Joining Date
                  </label>
                  <input name='joiningDate' type="date" id="Joining Date" className="rounded border border-gray-300 bg-gray-50" placeholder="Joining Date" required onChange={handleInput} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2">
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="Salary">
                      Salary
                    </label>
                    <input name='salary' type="number" id="Salary" className="w-full rounded border border-gray-300 bg-gray-50" min={0} maxLength={10} placeholder="Salary" required onChange={handleInput} />
                  </div>

                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="Id">
                      ID
                    </label>
                    <input name='registerId' type="text" id="id" className="w-full rounded border border-gray-300 bg-gray-50" min={0} maxLength={10} placeholder="#id" required onChange={handleInput} />
                  </div>

                </div>

              </>
            )
          }
        </div>
        <div className='flex items-center justify-center mt-4'>
          <button type="submit"
            className="text-white bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg px-6 py-3">Submit</button>
        </div>
      </form >
    </main >
  )
}

export default CreateEmployee
