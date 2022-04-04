import React from 'react';
import './HomeReview.css'

const HomeReview = (props) => {
    // console.log(props.review);

    const { name, review, rating, img } = props.review
    return (
        <div className='review'>
            <img src={img} alt="" />
            <h1>Customer Name: {name}</h1>
            <p>Review : {review}</p>
            <h3>{rating}</h3>
        </div>
    );

};

export default HomeReview;