import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useReview()
    console.log(reviews);

    return (
        <div>
            <h1 className='text-2xl'>This is review Page</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <Review ></Review>)
                }
            </div>
        </div >
    );
};

export default Reviews;