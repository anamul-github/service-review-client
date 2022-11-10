import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { name, img, price, description, details, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const cusName = `${form.name.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: cusName,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Posted');
                    form.reset();
                }
            })

            .catch(err => console.error(err));

    }


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

            <div>
                <h2 className='text-center text-primary mt-3'>Review</h2>
                <form onSubmit={handleReview} className='w-75 mx-auto py-4'>
                    <div className='d-flex'>
                        <div>
                            <label>Email Address</label><br />
                            <input type="email" name="email" placeholder="Your Email Address" defaultValue={user?.email} readOnly />
                        </div>

                        <div>
                            <label>Name</label> <br />
                            <input type="text" name="name" placeholder="Your Name" />
                        </div>
                    </div>

                    <label>Write a review</label><br />
                    <input type="textarea" name='message' rows={10} placeholder='Message....' />


                    <div className='py-2'>
                        <Button type='submit' className='text-white fw-semibold'>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;