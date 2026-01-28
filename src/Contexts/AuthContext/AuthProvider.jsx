import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {

        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false);
            }
            else {
                console.log("user is signed out")
                setUser(null)
                setLoading(false)
            }
        })
        return () => {
            unsubscribe();
        }
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
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
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