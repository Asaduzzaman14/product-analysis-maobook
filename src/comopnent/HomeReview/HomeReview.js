import React from 'react';
import './HomeReview.css'

const HomeReview = (props) => {
    // console.log(props.review);

    const { name, review, rating, img } = props.review
    return (
        <div className='review'>
            <img src={img} alt="" />
            <h1 className='font-bold p-2 text-lg'>Customer Name: {name}</h1>
            <p><span className='font-bold'> Review :</span> {review}</p>
            <h3>Rating: {rating}</h3>
        </div>
    );

};

export default HomeReview;