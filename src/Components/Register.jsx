import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const {user, createUser} = useContext(AuthContext)
    // console.log(createUser)

    const handlerRegister = (event)  =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlerRegister} className="card-body">
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />

                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-neutral">Register</button>
                        </div>
                    </form>
                    <div className='flex ms-8 mb-5'>
                        <p className='mr-2'>Have already an account?</p>
                        <Link to='/login'>
                            <button className="link  text-neutral link-link">Please Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;