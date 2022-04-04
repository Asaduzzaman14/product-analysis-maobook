import React from 'react';

const Review = (props) => {
    // console.log(props.reviewall);
    const { name, review, rating, img } = props.review
    return (
        <div className='review p-4 '>
            <img className='rounded-lg' src={img} alt="" />
            <h1>Customer Name: {name}</h1>
            <p>Review : {review}</p>
            <h3>{rating}</h3>
        </div>
    );

};

export default Review;