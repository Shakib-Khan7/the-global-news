/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast';


export const AuthContex = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [bookmarked, setBookmarked] = useState([])

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password)=>{

        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user in auth satte changed');
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])


    const handleBookMark = (news) =>{
        
       
        let newBookmark =[];
        const exists = bookmarked.find(name=>name._id === news._id )

        if(!exists){
            newBookmark = [...bookmarked, news]
            toast.success('Added to Bookmarked')
            

        }
        else{
            const remaining = bookmarked.filter(name=>name._id !==news._id);
            newBookmark = [...remaining,exists]
            toast.error('Already bookmarked')
            
        }
        setBookmarked(newBookmark);
        console.log(newBookmark);
        

        
        

    }





    const authInfo = {user,createUser,logOut,logIn,loading,googleLogIn,handleBookMark,bookmarked}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;