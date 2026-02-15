// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
// import { auth } from '../../../../firebase.config';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (event) => {


        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email, password)
            .then(result => { console.log(result) })
            .catch(error => { console.log(error) })
    }
    // const handleRegister = (event) => {

    //     // event.preventDefault();
    //     // const name = event.target.name.value;
    //     // const email = event.target.email.value;
    //     // const password = event.target.password.value;

    //     // console.log(name, email, password)

    //     // createUserWithEmailAndPassword(auth, email, password)
    //     //     .then((result) =>
    //     //         console.log(result)
    //     //     )
    //     //     .catch((error) =>
    //     //         console.log(error)
    //     //     )

    // }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">
                        Set your email and password
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* name field */}
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Name" />


                                {/* email field */}
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />


                                {/* password field */}
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />

                                <div className='text-center'>Already have an account? <Link className='text-blue-500 hover:text-blue-700' to="/login">login</Link></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;