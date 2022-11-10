import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review }) => {
    const { serviceName, customer, message, service } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    return (
        <tr>
            <td>
                {
                    reviewService?.img &&
                    <img src={reviewService.img} alt="" />}
            </td>
            <td>{customer}</td>
            <td>{serviceName}</td>
            <td>{message}</td>
        </tr>
    );
};

export default ReviewRow;