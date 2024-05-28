import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';
import BookMarkedNews from '../../components/BookMarkedNews';
import Navbar from '../Shared/Navbar/Navbar';

const Bookmark = () => {
    const {bookmarked} = useContext(AuthContex)
    console.log(bookmarked);
    let addedNews = []

    for(const news of bookmarked){
        addedNews.push(news)
    }
    return (
        <div>
            <h2 className='text-2xl font-semibold italic'>Bookmarked news</h2>
            <Navbar></Navbar>
            {
                bookmarked.map(bm=>
                    <BookMarkedNews key={bm._id} 
                    news= {bm}
                    
                    ></BookMarkedNews>
                )
            }
        </div>
    );
};

export default Bookmark;