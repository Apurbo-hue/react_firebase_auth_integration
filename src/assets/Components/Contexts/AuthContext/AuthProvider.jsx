import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../../firebase.config';

const AuthProvider = ({ children }) => {


    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                 console.log(currentUser)
            }
            else {
                console.log("Not found")
            }
        })
        
        return () => {
            unsubscribe;
        }
     },[])
    
    const authInfo = {
        createUser,signInUser
    }
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
            
        </div>
    );
};

export default AuthProvider;