import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import News from '../../components/News';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [news,setNews] = useState([])
    const data = useLoaderData()

    useEffect(()=>{
        setNews(data)
    },[])


    return (
        <div>
            <Toaster></Toaster>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2 border'>
                    
                    {
                        news.map(n=> <News key={n._id}

                            myNews = {n}
                        
                        
                        ></News> )
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;