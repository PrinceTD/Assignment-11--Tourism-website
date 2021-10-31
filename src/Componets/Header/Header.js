import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import "./header.css"
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home"><strong>TravelCity</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-bar' to='/home'>Home</Link>
                        <Link className='nav-bar' to='/about'>About</Link>
                        <Link className='nav-bar' to='/service'>Service</Link>
                        <Link className='nav-bar' to='/contact'>Contact us</Link>
                        {user?.displayName ?
                            <span className='ps-2'> <Button className='nav-bar border-0' onClick={logOut} variant="dark">logOut</Button> </span> :
                            <Link to="/login" className='nav-bar'>LogIn</Link>}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;