import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookMarkedNews = ({news}) => {
    return (
        <div>
            <div className='mb-8'>
            <div className='flex h-16 bg-slate-100  mb-6 items-center p-3'>
                <img className='w-8 h-8 rounded-full' src={news.author.img} alt="" />

                <div className='flex-grow ml-3'>
                    <p>{news.author.name}</p>
                    <p>{news.author.published_date}</p>
                </div>
                <div className='flex'>
                    
                </div>
            </div>

            <div className='px-3'>
                <h2 className='font-bold mb-4'>{news.title}</h2>
                <img className='mb-4' src={news.image_url} alt="" />
                <p>{news.details}</p>
            </div>





        </div>
        </div>
    );
};

export default BookMarkedNews;