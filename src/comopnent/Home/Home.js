import React from 'react';
import useReview from '../../Hooks/useReview';
import './Home.css'
import HomeReview from '../HomeReview/HomeReview'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const [reviews, setReviews] = useReview()
    // console.log(reviews);
    return (
        <div className=''>
            <div className='home p-5 grid  md:grid-cols-2 sm:grid-cols-1'>
                <div className='product-detail justify-center items-center'>
                    <h1 className='text-4xl'>MacBook Analysis</h1>
                    <p className='mt-4'>This is a M1 model It is fast, it is light, it is powerful, it wakes up in seconds..... it saves me time like crazy, no longer the annoying ball it replaces my old and faithful MacBook </p>
                    <button className='button border-2 px-6 py-1 text-white rounded  mt-4'>LIVE DEMO</button>
                </div>
                <div className=' '>
                    <img className='rounded' src={'img/image.avif'} alt="" />
                </div>
            </div>


            <div>

                <h1 className='text-2xl font-semibold'>CUSTOMER REVIEW(3)</h1>
                <div className='review-container grid  md:grid-cols-3 sm:grid-cols-1 my-5'>
                    {
                        reviews.slice(0, 3).map(review => <HomeReview key={review.id} review={review} ></HomeReview>)
                    }
                </div>

                <button onClick={() => navigate('/reviews')} className='button text-white mx-auto mb-6 border-2 px-6 py-1 rounded mt-4'>SEE All CUSTOMER REVIEW </button>
            </div>
        </div>
    );
};

export default Home;
// #27365a