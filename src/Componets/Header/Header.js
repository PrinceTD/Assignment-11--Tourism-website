import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import "./header.css"
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-bar' to='/home'>Home</Link>
                        <Link className='nav-bar' to='/about'>About</Link>
                        <Link className='nav-bar' to='/service'>Service</Link>
                        <Link className='nav-bar' to='/contact'>Contact us</Link>
                      
                            <Link className='nav-bar' to='/login'>LogIn</Link>
                       
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;