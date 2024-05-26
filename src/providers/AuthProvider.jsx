/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContex = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user in auth satte changed');
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])





    const authInfo = {user,createUser,logOut,logIn}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;