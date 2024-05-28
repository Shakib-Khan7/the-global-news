import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
            <Toaster></Toaster>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;