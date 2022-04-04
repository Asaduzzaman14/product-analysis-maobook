import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useReview()
    console.log(reviews);

    return (
        <div>
            <h1 className='text-3xl mt-16 mb-5'>All Customer Reviews</h1>
            <p className='mb-7 mx-40'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maxime voluptatibus vel ea fugiat dignissimos cum deleniti ipsum amet eos, accusantium, praesentium voluptates architecto esse?s</p>
            <div className='review-container grid  md:grid-cols-3 sm:grid-cols-1'>
                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div >
    );
};

export default Reviews;