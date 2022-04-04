import React from 'react';
import useReview from '../../Hooks/useReview';
import './Home.css'
import HomeReview from '../HomeReview/HomeReview'

const Home = () => {
    const [reviews, setReviews] = useReview()
    // console.log(reviews);
    return (
        <div className=' p-5 '>
            <div className='home'>
                <div className='product-detail justify-center items-center'>
                    <h1 className='text-4xl'>BUY your Gadget</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, beatae in. Sit, nesciunt accusantium inventore illum commodi ipsum placeat dignissimos?</p>
                    <button className='border-2 px-6 py-1 text-white rounded bg-blue-500 mt-4'>BUY NOW</button>
                </div>
                <div className=' '>
                    <img className='' src={'/img/laptop.avif'} alt="" />
                </div>
            </div>


            <div>
                <button className='mx-auto border-2 px-6 py-1 text-white rounded bg-blue-500 mt-4'>SEE CUSTOMER REVIEW (3)</button>

                <div className='review-container'>
                    {
                        reviews.slice(0, 3).map(review => <HomeReview key={review.id} review={review} ></HomeReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
// #27365a