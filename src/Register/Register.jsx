import React, { use } from 'react';
// import {createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router';
// import { auth } from '../../firebase.config';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';


const Register = () => {

    const { createUser } = use(AuthContext);
    console.log(createUser)

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
            
            .then(result => console.log(result))
            
        .catch(error => console.log(error))
    }


    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;

    //     console.log(name, email, password);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((user) =>
    //             console.log(user)
    //         )
    //         .catch((error) =>{
    //             console.log(error.code),
    //     console.log(error.message)})
    // }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Please fill up the form to register
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                {/* name input */}
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" name="name"/>
                                {/* email input */}
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />
                                {/* password input */}
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />

                               
                                <button className="btn btn-neutral mt-4">Register</button>
                                <p className='text-center'>Already have an account? <Link className='text-blue-500 hover:text-blue-700' to="/login">Login</Link></p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;