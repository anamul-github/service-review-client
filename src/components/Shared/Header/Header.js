import React, { useContext } from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        // <Navbar className='p-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="#home">Fitness Training</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     </Container>

        //     <Button className='me-3' variant="outline-secondary"><Link className='navbars' to='/'>Home</Link></Button>
        //     <Button className='me-3' variant="outline-secondary"><Link className='navbars' to='/allServices'>Services</Link></Button>
        //     <Button className='me-3' variant="outline-secondary"><Link className='navbars' to='/blog'>Blog</Link></Button>

        // {
        //     user?.uid ?
        //         <>
        //             <Button className='me-3' variant="outline-secondary"><Link className='navbars' to='/myReview'>Reviews</Link></Button>
        //             <Button className='me-3 add-service-button' variant="outline-secondary"><Link className='navbars' to='/addService'>Add Service</Link></Button>
        //             <Button variant="light" onClick={handleLogOut} className='mx-2'>Logout</Button>
        //         </>
        //         :
        //         <>
        //             <Button className='me-3' variant="outline-secondary"><Link className='navbars' to='/login'>Login</Link></Button>
        //             <Button className='me-3' variant="outline-secondary"><Link className='navbars' to='/register'>Register</Link></Button>
        //         </>
        // }
        //     {
        //         user?.photoURL ?
        //             <OverlayTrigger
        //                 placement="bottom"
        //                 delay={{ show: 250, hide: 400 }}
        //                 overlay={renderTooltip}>
        //                 <Image
        //                     className='m-2'
        //                     style={{ height: '30px' }}
        //                     roundedCircle
        //                     src={user?.photoURL}>
        //                 </Image>
        //             </OverlayTrigger>
        //             : <FaUser className='text-white'></FaUser>
        //     }
        // </Navbar >

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className='navbar-brand' to='/'>Fitness Training</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto me-3">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/allServices">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        {
                            user?.uid ?
                                <>

                                    <li className="nav-item">
                                        <Link className='nav-link' to='/myReview'>Reviews</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='/addService'>Add Service</Link>
                                    </li>
                                    <li onClick={handleLogOut} className=" btn btn-primary nav-item">
                                        Logout
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='/login'>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='/register'>Register</Link>
                                    </li>
                                </>
                        }
                        {
                            user?.photoURL ?
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}>
                                    <Image
                                        className='m-2'
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                </OverlayTrigger>
                                : <FaUser className='text-white'></FaUser>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;