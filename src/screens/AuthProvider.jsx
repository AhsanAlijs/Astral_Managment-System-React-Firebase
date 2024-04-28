import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../config/firebase/firebaseConfig';
import { useLoaderData } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const user1 = useLoaderData();
    const [user, setUser] = useState(user1);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) return;
            try {
                setLoading(true)
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const user = { id: docRef.id, ...(docSnap.data()) }
                    // console.log(user);
                    setUser(user)
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false)
        })
    }, [])



    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(textStyle, {
            duration: 1,
            rotation: '180deg',
            ease: 'bounce.in',
            stagger: {
                amount: 1,
                repeat: -1,
            },
        });

    }, []);


    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'column'
    };

    const loaderStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    }

    const boxStyles = {
        height: '30px',
        width: '30px',
        border: '10px solid #00e5ba',
        borderRadius: '10px',
    };
    const textStyle = {
        fontSize: '30px',
        fontWeight: '900'
    }





    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {loading ? <div className='flex items-center justify-center h-screen'>
                <div style={containerStyles}>
                    <div style={loaderStyle} >
                        <div className="box border" style={boxStyles}></div>
                        <div className="box border" style={boxStyles}></div>
                        <div className="box border" style={boxStyles}></div>
                        <div className="box border" style={boxStyles}></div>
                    </div>
                    <p style={textStyle} >Astral developer</p>
                </div>
            </div> : children}
        </AuthContext.Provider>

    )
}

export function useAuth() {
    return useContext(AuthContext);
}
export default AuthProvider
