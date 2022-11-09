import React, { useContext } from 'react';
import { Button, Container, Image, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

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
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/allServices">All Services</Nav.Link>
                        <Nav.Link href="/blog" >Blog</Nav.Link>

                        {/* <Nav.Link href="/register" >Register</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>


            {
                user?.uid ?
                    <>
                        <Button variant="light" onClick={handleLogOut} className='mx-2'>Log out</Button>
                    </>
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
            }

            {user?.photoURL ?
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
        </Navbar>
    );
};

export default Header;