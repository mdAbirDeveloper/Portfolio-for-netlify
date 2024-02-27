import React, { useContext } from 'react';
import { FaEnvelopeOpen, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { AuthContext } from '../Authenticatio/Authenticatio';

const Contect = () => {

    const {user} = useContext(AuthContext);
    // console.log(user)

    return (
        <div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 my-16'>
                <div className='grid gap-4'>
                    <FaLocationArrow className='text-4xl text-green-500 ml-48'></FaLocationArrow>
                    <h2 className='text-2xl font-bold'>Adderess</h2>
                    <p>B-para, Cumilla , <span className='text-green-600'>Bangladesh</span></p>
                </div>
                <div className='grid gap-4'>
                    <FaEnvelopeOpen className='text-4xl text-green-500 ml-48'></FaEnvelopeOpen>
                    <h2 className='text-2xl font-bold'>Adderess</h2>
                    <p>Email, <span className='text-green-600'>abir.developer@gmail.com</span></p>
                </div>
                <div className='grid gap-4'>
                    <FaMobileAlt className='text-4xl text-green-500 ml-48'></FaMobileAlt>
                    <h2 className='text-2xl font-bold'>Adderess</h2>
                    <p>Phone: <span className='text-green-600'>+8801832822560</span></p>
                </div>
            </div>


            <div className=' bg-base-200'>
                <p className="py-6 text-xl font-bold text-green-600">TELL ME MORE ABOUT YOUR PROJECT</p>
                <div className="hero lg:w-3/5 mx-auto mb-20">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">LET`S WORK TOGETHER</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-accent" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input defaultValue={user?.email} type="email" readOnly className="input input-accent" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-accent" placeholder="message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contect;