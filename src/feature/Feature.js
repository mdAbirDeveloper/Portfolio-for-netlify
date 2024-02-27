/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./feature.css"
import Liquid from './anotherButton/Liquid';

const Feature = () => {
    return (
        <div className=''>
            <div className='feature-body'>
                <a className='first-btn'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Button
                </a>
            </div>
            <Liquid></Liquid>
        </div>
    );
};

export default Feature;