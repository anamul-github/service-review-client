import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const ServiceDetails = () => {
    const { name, img, price, description, details } = useLoaderData();
    const { user } = useContext(AuthContext);

    //get operation to show reviews
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        fetch('http://localhost:5000/reviews?email')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-center text-primary mt-3'>Service</h2>
            <Card className='mx-auto w-75 mb-5'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <h3 className='font-bold'>Name: {name}</h3> </Card.Title>
                    <Card.Text className='text-success'>
                        <h4>Price: ${price}</h4>
                    </Card.Text>
                    <Card.Text>
                        <h4>Description: {description}</h4>
                    </Card.Text>
                    <Card.Text>
                        <h5>Details: {details}</h5>
                    </Card.Text>
                </Card.Body>
            </Card>


            <div className='w-75 mx-auto'>
                <h2 className='text-center text-primary mt-3'>Review</h2>
                <h3>
                    People posted {reviews.length} reviews
                </h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews?.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                            ></ReviewRow>)
                        }

                    </tbody>
                </Table>
                <Button><Link className='text-white font-bold text-center' to='/myReview'>Post Your Review Here</Link></Button>
            </div>
        </div>
    );
};

export default ServiceDetails;