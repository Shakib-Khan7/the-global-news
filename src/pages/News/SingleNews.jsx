import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';


const SingleNews = () => {
    const { id } = useParams()
    const myNews = useLoaderData()
    const { _id, image_url, title, details, category_id } = myNews
    console.log(myNews);










    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className='col-span-3'>
                    <h2 className="text-2xl mb-4">Global News</h2>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {title}
                                
                            </h2>
                            <p>{details}</p>
                            
                        </div>
                    </div>







                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <h2>news details</h2>
        </div>
    );
};

export default SingleNews;