import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const SingleNews = () => {
    const [news, setNews] = useState([]);
    const [mySelectedNews, setMySelectedNews] = useState(null);
    const { id } = useParams(); // Destructure to get id directly

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                const selected = data.find(n => n._id === id);
                setMySelectedNews(selected);
            })
            .catch(error => console.error('Error fetching news:', error));
    }, [id]); // Add id as a dependency to refetch if the id changes

    if (!mySelectedNews) {
        return <div className='text-center mt-80'>
        <span className="loading loading-bars loading-xs"></span>
    <span className="loading loading-bars loading-sm"></span>
    <span className="loading loading-bars loading-md"></span>
    <span className="loading loading-bars loading-lg"></span>
    </div>; // Show a loading message or spinner while fetching data
    }

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4">
                <div className='col-span-3'>
                    <h2 className="text-2xl mb-4">Global News</h2>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={mySelectedNews.image_url} alt="News" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {mySelectedNews.title}
                            </h2>
                            <p>{mySelectedNews.details}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
           
        </div>
    );
};

export default SingleNews;
