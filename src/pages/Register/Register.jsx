import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContex } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser,setUser} = useContext(AuthContex)
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,email,password,photo);

        //create user

        createUser(email,password)
        .then(result=>{
            
            navigate('/')
            
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })

    }

    





    return (
        <div>
            <Navbar></Navbar>
            <div className=''>
                <h2 className="text-3xl text-center">Please Sign Up</h2>

                <form onSubmit={handleRegister} className='md:w-3/4 lg:w-1/2 mx-auto'>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Url" className="input input-bordered" name='photo' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>

                </form>
                <p className='text-center mt-3'>Already have an account?  <Link className='text-blue-500' to='/login'>Login now</Link></p>
            </div>
        </div>
    );
};

export default Register;