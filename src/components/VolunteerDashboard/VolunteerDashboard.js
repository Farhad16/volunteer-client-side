import React, { useContext, useEffect, useState } from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../assets/logos/logo.png'
import './VolunteerDashboard.css'
import noImg from '../../assets/images/noImg.jpg'


const VolunteerDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [registered, setRegistered] = useState([]);

    const [email, setEmail] = useState(loggedInUser.email);

    useEffect(() => {
        fetch(`https://murmuring-peak-07736.herokuapp.com/volunteeringList/${email}`)
            .then(res => res.json())
            .then(data => setRegistered(data));
    }, [email])


    const handleCancel = (eventId) => {
        fetch(`https://murmuring-peak-07736.herokuapp.com/deleteRegistered/${eventId}`, {
            method: 'DELETE',

        }).then(res => res.json())
            .then(result => {
                if (result) {
                    fetch(`https://murmuring-peak-07736.herokuapp.com/volunteeringList/${email}`)
                        .then(res => res.json())
                        .then(data => setRegistered(data));
                }
            })
    };

    return (
        <div className="volunteer">
            <Navbar className="navber d-flex justify-content-between ">
                <Form inline>
                    <Navbar.Brand><Link to="/" className="icon"><img src={logo} alt="" /></Link></Navbar.Brand>
                </Form>
                <Form inline>
                    <Nav>
                        <Link to="/home" className="navLink">Home</Link>
                        <Link to="/review" className="navLink">Donation</Link>
                        <Link to="/events" className="navLink">Events</Link>
                        <Link to="/blogs" className="navLink">Blogs</Link>
                        <Link to="/" className="navLink" onClick={() => { setLoggedInUser({}) }}>Logout</Link>
                        <Link to="" className="navLinkUser">{loggedInUser.displayName}</Link>
                    </Nav>
                </Form>
            </Navbar>

            <div className="volunteeringList">
                <div className="row">
                    {
                        registered.map(register =>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" key={register._id}>
                                <div className="event d-flex ">
                                    <div className="eventImage">
                                        {
                                            register.pic ? <img src={require(`../../assets/images/${register.pic}`)} alt="" /> :
                                                <img src={noImg} alt="" />
                                        }
                                    </div>
                                    <div className="eventNameAndDate">
                                        <h4>{register.eventName}</h4>
                                        <p>{register.dateWithName}</p>
                                        <button className="btn btn-secondary cancel" onClick={() => { handleCancel(register._id) }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default VolunteerDashboard;