import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const Authenticatio = ({children}) => {
    const auth = getAuth(app);
    const [user , setUser] = useState();
    const [loading, setLoading] = useState(true)

    

    const signUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signOutUser = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
             console.log('user obserbing');
             setUser(currentUser);
             setLoading(false)
         })
       return () => {
         unsubscribe()
       };
     }, [auth])


    const authInfo = {
        signIn,
        signUp,
        user,
        loading,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authenticatio;