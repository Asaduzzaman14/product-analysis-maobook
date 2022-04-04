import React from 'react';

const Review = (props) => {
    console.log(props.reviewall);
    // const { name, review, rating, img } = props.review
    return (
        <div className='review'>
            <h1 className='text-3xl'>hello</h1>
            {/* <img src={img} alt="" />
            <h1>Customer Name: {name}</h1>
            <p>Review : {review}</p>
            <h3>{rating}</h3> */}
        </div>
    );

};

export default Review;