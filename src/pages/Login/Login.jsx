import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContex)
    const location = useLocation()
    console.log('in login',location);
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(form.get('email'));
        //login

        logIn(email,password)
        .then(result=>{
            console.log(result.user);
            
            //navigate after login
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error);
        })



    }


    return (
        <div>
            <Navbar></Navbar>
            <div className=''>
                <h2 className="text-3xl text-center">Please Login</h2>

                <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>

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
                        <button className="btn btn-primary">Login</button>
                    </div>

                </form>
                <p className='text-center mt-3'>Don't have an account?  <Link className='text-blue-500' to='/register'>Register now</Link></p>
            </div>
        </div>
    );
};

export default Login;