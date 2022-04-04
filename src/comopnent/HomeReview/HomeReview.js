import React from 'react';
import './HomeReview.css'
import { AiFillStar } from 'react-icons/ai';
const HomeReview = (props) => {
    // console.log(props.review);

    const { name, review, rating, img } = props.review
    return (
        <div className='review'>
            <img className='rounded' src={img} alt="" />
            <h1 className='font-bold p-2 text-lg'> Name: {name}</h1>
            <p><span className='font-bold'> Review :</span> {review}</p>
            <div className='rating flex justify-center mt-3 text-center'>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <h3 className='ml-2 '> {rating}</h3>
            </div>
        </div>
    );

};

export default HomeReview;