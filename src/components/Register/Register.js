import React, { useContext } from 'react';
import logo from '../../assets/logos/logo.png'
import './Register.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const orderDetails = { ...loggedInUser, orderTime: new Date() }
        fetch('https://limitless-sands-03516.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)

        }).then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully')
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
                        < input name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} placeholder="Your Name" />
                        {errors.name && <span>Name is required</span>}
                        < input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} placeholder="Your Email" />
                        {errors.email && <span>Email is required</span>}
                        < input name="address" ref={register({ required: true })} placeholder="Date" />
                        {errors.address && <span>Address is required</span>}
                        < input name="phone" ref={register({ required: true })} placeholder="Description" />
                        {errors.phone && <span>Phone is required</span>}
                        < input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} placeholder="Event Name" />
                        {errors.email && <span>Email is required</span>}
                        <input type="submit" placeholder="Registration" />
                    </form >
                </div>
            </div>
        </div>
    );
};

export default Register;