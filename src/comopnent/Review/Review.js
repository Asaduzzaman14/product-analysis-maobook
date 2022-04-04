import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Review = (props) => {
    // console.log(props.reviewall);
    const { name, review, rating, img } = props.review
    return (
        <div className='review p-4 '>
            <img className='rounded-lg' src={img} alt="" />
            <h1>Customer Name: {name}</h1>
            <p>Review : {review}</p>
            <div className='rating flex justify-center mt-3 text-center'>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                {/* <h3 className='ml-2 '> {rating}</h3> */}
            </div>

        </div>
    );

};

export default Review;