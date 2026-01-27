import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase.config';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser)
            }
            else {
                console.log("user is signed out")
            }
            return () => {
                unsubscribe();
            }
        })
    }, [])

    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log(currentUser, "if")
    //     }
    //     else {
    //         console.log("user signed out")
    //     }
    // })
    
    const authInfo = {
        createUser,
        signInUser
    }
    return (

        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;

// 1.create a context and export
// 2.create a provider so that u can reuse the context in different places
// 3.ensure u use the children prop
// 4.make sure use the auth provider in the router
// 5. make the crate user with email and password shared via provider
// 6.set crateUser in the authInfo obj to share provider