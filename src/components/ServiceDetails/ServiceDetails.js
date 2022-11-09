import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const ServiceDetails = useLoaderData();
    return (
        <div>
            <h2 className='text-center text-primary mt-3'>Service</h2>
            <Card className='mx-auto w-75'>
                <Card.Img variant="top" src={ServiceDetails.img} />
                <Card.Body>
                    <Card.Title> <h3 className='font-bold'>Name: {ServiceDetails.name}</h3> </Card.Title>
                    <Card.Text className='text-success'>
                        <h4>Price: ${ServiceDetails.price}</h4>
                    </Card.Text>
                    <Card.Text>
                        <h4>Description: {ServiceDetails.description}</h4>
                    </Card.Text>
                    <Card.Text>
                        <h5>Details: {ServiceDetails.details}</h5>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default ServiceDetails;