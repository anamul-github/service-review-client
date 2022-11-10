import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = ({ review }) => {
    const { name, price, _id } = { review }
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

        // post operation
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
            <h2 className='text-center text-primary mt-3'>Review</h2>
            <h4 className='w-75 mx-auto'>
                Post Your Review here:
            </h4>
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
    );
};

export default MyReview;