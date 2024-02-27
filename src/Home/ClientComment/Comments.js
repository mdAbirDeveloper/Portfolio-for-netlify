import React from 'react';

const Comments = ({ comments }) => {
    const { name, email, comment, image } = comments;
    return (
        <div>
            <div className="bg-green-100 rounded-lg">
                <div className="">
                    <div className='lg:ml-72 md:ml-96 ml-40 '>
                        <img src={image} alt='' className="rounded-full shadow-2xl w-14" />
                    </div>
                    <h1 className="text-xl font-bold ">Name: {name}</h1>
                    <p className="">Comments: {comment}</p>
                </div>
                <div>
                    <h3 className='font-bold text-green-500'>Email: {email}</h3>
                </div>
            </div>
        </div>
    );
};

export default Comments;