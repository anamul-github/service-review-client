import React, { useEffect, useState } from 'react';
import './ReviewRow.css';

const ReviewRow = ({ review }) => {

    const { serviceName, customer, message, service } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`https://service-review-server-delta.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    return (
        <tr>
            <td>
                {
                    reviewService?.img &&
                    <img className='review-img' src={reviewService.img} alt="" />}
            </td>
            <td>{customer}</td>
            <td>{serviceName}</td>
            <td>{message}</td>
        </tr>
    );
};

export default ReviewRow;