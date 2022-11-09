import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div>
                <img
                    className="w-100 img-fluid"
                    src="https://www.muscleandfitness.com/wp-content/uploads/2015/07/CubeCover.jpg?quality=86&strip=all"
                    alt="banner"
                />
            </div>
            <div className="row row-cols-1 row-cols-md-3 mt-5">
                {
                    services.map(service => <Card className='m-3 mx-auto' key={service._id}>
                        <PhotoProvider>

                            <PhotoView>
                                <Card.Img variant="top" src={service.img} />
                            </PhotoView>

                        </PhotoProvider>


                        <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
                            <Card.Text>
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
            <Link to='/allServices'><Button className='btn-success mx-auto px-5 mb-5 content-center'>See All</Button></Link>
        </div>
    );
};

export default Home;