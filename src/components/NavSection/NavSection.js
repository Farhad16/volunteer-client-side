
import React, { useContext } from 'react';
import { Button, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../assets/logos/logo.png'
import './NavSection.css'


const NavSection = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div className="banner">
            <div className="navSection">
                <Navbar className="navber d-flex justify-content-between">
                    <Form inline>
                        <Navbar.Brand><Link to="/" className="icon"><img src={logo} alt="" /></Link></Navbar.Brand>
                    </Form>
                    <Form inline>
                        <Nav>
                            <Link to="/home" className="navLink">Home</Link>
                            <Link to="/dental" className="navLink">Dental Services</Link>
                            <Link to="/review" className="navLink">Review</Link>
                            <Link to="/contact" className="navLink">Contact</Link>
                            <Link to="/events" className="navLink">Events</Link>
                            {loggedInUser.email ?
                                <Link to="/" className="navLink" onClick={() => { setLoggedInUser({}) }}>Logout</Link>
                                : <Link to="/login" className="navLink">Login</Link>}

                        </Nav>
                    </Form>
                </Navbar>

                <div className="search">
                    <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                    <InputGroup className="mb-3 seachField">
                        <FormControl
                            placeholder="Search...."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button className="primary" variant="primary">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default NavSection;