import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logos/logo.png'
import './Register.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { Link, useHistory, useParams } from 'react-router-dom';


const Register = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();

    const localDate = (Date().toLocaleString().slice(0, 16));
    const todayDate = localDate.slice(4, 15);

    useEffect(() => {
        fetch(`http://localhost:4000/singleEvent/${eventId}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [eventId])

    const onSubmit = data => {
        const registerDetails = { ...event, ...data, dateWithName: todayDate }
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerDetails)

        }).then(res => res.json())
            .then(result => {
                if (result) {
                    history.replace('/events');
                }
            })
    };


    return (
        <div className="registerContainer">
            <div className="registration">
                <Link to="/"><img src={logo} alt="" /></Link>
                <div className="regSection">
                    <h5>Register as a volunteer</h5>
                    < form onSubmit={handleSubmit(onSubmit)} className="registerForm">
                        < input name="name" ref={register({ required: true })} defaultValue={loggedInUser.displayName} placeholder="Your Name" />
                        {errors.name && <span>Name is required</span>}
                        < input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} placeholder="Your Email" />
                        {errors.email && <span>Email is required</span>}
                        < input type="date" name="date" ref={register({ required: true })} placeholder="Date" />
                        {errors.address && <span>Address is required</span>}
                        < input name="description" ref={register({ required: true })} placeholder="Description" />
                        {errors.phone && <span>Phone is required</span>}
                        < input name="eventName" ref={register({ required: true })} defaultValue={event.name} placeholder="Event Name" />
                        {errors.email && <span>Email is required</span>}
                        <input type="submit" placeholder="Registration" />
                    </form >
                </div>
            </div>
        </div>
    );
};

export default Register;