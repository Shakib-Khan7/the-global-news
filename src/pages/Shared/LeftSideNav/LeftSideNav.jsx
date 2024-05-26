import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../../assets/assets/1.png'
import pic2 from '../../../assets/assets/2.png'
import pic3 from '../../../assets/assets/3.png'
import moment from 'moment';
import { FaCalendarAlt } from "react-icons/fa";

const LeftSideNav = () => {

    const [categories, SetCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => SetCategories(data))
    }, [])
    return (
        <div className='space-y-6'>
            <h2>All Categories</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`}
                    className='block ml-4 font-semibold'

                    key={category.id}> {category.name}


                </Link>)
            }
            <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                <figure><img src={pic1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base">Find an orphan a home</h2>
                    <div className="card-actions flex">
                        <div className='flex flex-grow'>
                        <p className=''>Social</p>
                        <p className='font-extralight flex items-center justify-evenly'><FaCalendarAlt></FaCalendarAlt>{moment().format("MMMM D,YYYY")}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                <figure><img src={pic2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base">Book your flat on best deals!</h2>
                    <div className="card-actions flex">
                        <div className='flex flex-grow'>
                        <p className=''>Social</p>
                        <p className='font-extralight flex items-center justify-evenly'><FaCalendarAlt></FaCalendarAlt>{moment().format("MMMM D,YYYY")}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                <figure><img src={pic3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base">Live Screening of UCL 23-24</h2>
                    <div className="card-actions flex">
                        <div className='flex flex-grow'>
                        <p className=''>Sports</p>
                        <p className='font-extralight flex items-center justify-evenly'><FaCalendarAlt></FaCalendarAlt>{moment().format("MMMM D,YYYY")}</p>
                        </div>
                        
                    </div>
                </div>
            </div>




        </div>
    );
};

export default LeftSideNav;