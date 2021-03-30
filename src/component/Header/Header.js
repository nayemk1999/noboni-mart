import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
            <Navbar collapseOnSelect expand="lg"  >
                <Navbar.Brand className="logo" href="/home">NoboniMart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link><Link className="link" to='/home'>Home</Link></Nav.Link>
                        <Nav.Link> <Link className="link" to='/destination'>Destination</Link></Nav.Link>
                        <Nav.Link> <Link className="link" to='/contact'>Contact</Link></Nav.Link>
                        <Nav.Link> <Link className="link" to='/adminPanel'>AdminPanel</Link></Nav.Link>
                        

                        {/* <Nav.Link>
                            {
                                loggedInUser.email ?<Link className="log-link" to='/search-ride'>{loggedInUser.name}</Link>
                                    :<Link className="log-link" to='/login'>Login</Link>
                            }
                        </Nav.Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Header;