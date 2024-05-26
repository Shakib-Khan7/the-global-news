import moment from 'moment';
import React from 'react';

const Header = () => {
    return (
        <div className='text-center'>
            <h2 className='text-5xl italic bold'>The Global News</h2>
            <p>Journalism Without Border & Barrier</p>
            <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;