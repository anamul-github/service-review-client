import React, { useContext } from 'react';
import { Button, Container, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
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
        <Navbar className='p-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Fitness Training</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            </Container>

            <Button className='me-2' variant="outline-secondary"><Link className='navbars' to='/'>Home</Link></Button>
            <Button className='me-2' variant="outline-secondary"><Link className='navbars' to='/allServices'>Services</Link></Button>
            <Button className='me-2' variant="outline-secondary"><Link className='navbars' to='/blog'>Blog</Link></Button>

            {
                user?.uid ?
                    <>
                        <Button variant="light" onClick={handleLogOut} className='mx-2'>Logout</Button>
                    </>
                    :
                    <>
                        <Button className='me-2' variant="outline-secondary"><Link className='navbars' to='/login'>Login</Link></Button>
                        <Button className='me-2' variant="outline-secondary"><Link className='navbars' to='/register'>Register</Link></Button>
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
        </Navbar >
    );
};

export default Header;