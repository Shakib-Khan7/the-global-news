import React from 'react';
import { FaBookmark, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = ({myNews}) => {
    const {_id,image_url,title,details,author,total_view,rating} = myNews
   
    return (
        <div className=''>
            <div className='flex h-16 bg-slate-100  mb-6 items-center p-3'>
                <img className='w-8 h-8 rounded-full' src={author.img} alt="" />

                <div className='flex-grow ml-3'>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
                <div className='flex'>
                    <button className='mr-2'><FaRegBookmark></FaRegBookmark></button>
                    <button><FaShareAlt></FaShareAlt></button>
                </div>
            </div>

            <div className='px-3'>
                <h2 className='font-bold mb-4'>{title}</h2>
                <img className='mb-4' src={image_url} alt="" />
                {
                    details.length <250 ? <>{details}</> : <>
                    {details.slice(0,250)}...<Link className='ml-1 text-blue-500'>Read More</Link>
                    </>
                }
            </div>





        </div>
    );
};

export default News;