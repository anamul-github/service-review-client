import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const ServiceDetails = useLoaderData();
    return (
        <div>
            <h2>This is Service Details Page: {ServiceDetails.name}</h2>

        </div>
    );
};

export default ServiceDetails;