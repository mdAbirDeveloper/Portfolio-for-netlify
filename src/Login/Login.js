import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toastr from 'reactjs-toastr/lib/react-toast';
import { AuthContext } from '../Authenticatio/Authenticatio';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        
        signIn(email, password)
        .then(result => {
            navigate('/');
            toastr.success('user login successfully')
        })
        .then(err => {
            console.log(err);
            setError(err)
        })

    }

    return (
        <div>
                <h2 className='text-xl font-bold text-green-500'>LogIn</h2>
            <div className="hero bg-base-200">
                <div className="hero-content">
                    <form className='lg:w-96 w-full' onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <p>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </div>
                        <div>
                            <p>New to this website? <Link to={'/signup'}>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;