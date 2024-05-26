import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className="btn btn-warning">Latest</button>
            <Marquee speed={80}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Marquee>
        </div>
    );
};

export default BreakingNews;