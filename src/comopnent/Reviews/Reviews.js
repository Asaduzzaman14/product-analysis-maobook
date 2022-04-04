import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useReview()
    console.log(reviews);

    return (
        <div>
            <h1 className='text-3xl mt-16 mb-5'>All Customer Reviews</h1>
            <p className='mb-7 mx-40'> Coming into this review, I had a catalog of potential pitfalls that Apple could have fallen into when switching from an Intel chip to its own processor. Chip transitions are devilishly hard and don’t usually go smoothly. This MacBook Air not only avoids almost all of those pitfalls, but it gleefully leaps over them.</p>
            <div className='review-container grid  md:grid-cols-3 sm:grid-cols-1'>
                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div >
    );
};

export default Reviews;