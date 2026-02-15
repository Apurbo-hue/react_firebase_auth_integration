// import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
// import { auth } from '../../../../firebase.config';

const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const handleLogin= (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInUser(email, password)
            .then(result => { console.log(result) })
            .catch(error => { console.log(error) })
    }


    // const handleLogin = (event) => {
    //     event.preventDefault();
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     console.log(email, password)
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((result) =>
    //         {
    //             console.log(result)
    //           }
    //     )
    //         .catch((error) => {
    //         console.log(error)
    //     })
    // }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Enter your email and password to login
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                {/* email field */}
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />

                                {/* password field */}
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />

                                <div className='text-center'>Don't have an account? <Link className='text-blue-500 hover:text-blue-700' to="/register">register</Link></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;