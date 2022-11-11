import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-delta.vercel.app/allServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5'>All Services</h2>
            <div className="row row-cols-1 row-cols-md-3 mb-5">
                {
                    services.map(service => <Card className='m-3 mx-auto' key={service._id}>
                        <PhotoProvider>
                            <PhotoView src={service.img}>
                                <Card.Img variant="top" src={service.img} />
                            </PhotoView>
                        </PhotoProvider>
                        <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
                            <Card.Text className='text-success'>
                                Price : ${service.price}
                            </Card.Text>
                            <Card.Text>
                                {service.description}
                            </Card.Text>
                            <Link to={`/serviceDetails/${service._id}`}>
                                <Button variant="primary">View Details</Button>
                            </Link>

                        </Card.Body>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default AllServices;