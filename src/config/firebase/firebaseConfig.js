import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCyqiQ4knO_psTQS_DqEjVyxr7KkvY0ohs",
    authDomain: "management-webapp-a41c7.firebaseapp.com",
    projectId: "management-webapp-a41c7",
    storageBucket: "management-webapp-a41c7.appspot.com",
    messagingSenderId: "318027687435",
    appId: "1:318027687435:web:fc5fd02ae7e465feb2490e",
    measurementId: "G-RDDY2ESTPW"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)