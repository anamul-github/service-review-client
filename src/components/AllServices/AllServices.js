import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-3 mt-5">
            {
                services.map(service => <Card className='m-3 mx-auto' key={service._id}>
                    <Card.Img variant="top" src={service.img} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            Price : {service.price}
                        </Card.Text>
                        <Card.Text>
                            {service.description}
                        </Card.Text>
                        <Link to={`/contentDetails/${service._id}`}>
                            <Button variant="primary">View Details</Button>
                        </Link>

                    </Card.Body>
                </Card>)
            }
        </div>
    );
};

export default AllServices;