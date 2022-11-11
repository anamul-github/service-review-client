import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-delta.vercel.app/services')
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
            <h2 className='text-primary text-center mt-5'>Services</h2>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    services.map(service => <Card className='m-3 mx-auto' key={service._id}>
                        <PhotoProvider>
                            <PhotoView src={service.img}>
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
            <div className='mx-auto'>
                <Link to='/allServices'><Button className='btn-success px-5 mb-5'>See All</Button></Link>
            </div>
            <h2 className='text-primary text-center mt-5'>PROUD TO BE THE FIRST FITNESS BRAND WITH THE WELL HEALTH-SAFETY RATING</h2>
            <div className='d-flex justify-content-between gap-5 p-4 m-3'>
                <div className='w-75'>
                    <h5>Gym confidently in our Well Health Safety Rated clubs. <br /> <br /> You will soon find a Well Health Safety Seal on the front door of every Fitness Training. Backed by science and evaluated by third-party experts, this seal means you can run, curl, lift, squat, press, walk and gym confidently in the Clean Thumb Club™</h5>
                </div>
                <div className='w-25'>
                    <img className='img-fluid' src="https://w0.peakpx.com/wallpaper/275/762/HD-wallpaper-sports-bodybuilding-man-muscle-fitness.jpg" alt="" />
                </div>
            </div>


            <h2 className='text-primary text-center mt-5'>LET’S GET GLOWING!</h2>
            <div className='d-flex justify-content-between gap-5 p-4 m-3'>
                <div className='w-25'>
                    <img className='img-fluid' src="https://www.cardsource.com/hs-fs/hubfs/Imported_Blog_Media/membership-card_fitness-267x160.jpg?width=267&name=membership-card_fitness-267x160.jpg" alt="" />
                </div>
                <div className='w-75'>
                    <h5>Become a Fitness Training Black Card® member for $0 enrollment, $24.99 a month, and receive a FREE Amazon Halo View fitness & sleep tracker! Plus, you can bring a guest to any workout, get access to 2,200+ clubs, relax in the Black Card Spa, and more!</h5>
                </div>

            </div>
        </div>
    );
};

export default Home;