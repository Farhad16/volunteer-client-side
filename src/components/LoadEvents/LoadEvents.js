import React from 'react';
import { Link } from 'react-router-dom';
import './LoadEvents.css'

const LoadEvents = (props) => {

    const { name, pic, _id } = props.event;

    return (
        <div className="singleEvent col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <Link to={`/register/${_id}`}>
                <div className="eventName">
                    <h5>{name}</h5>
                </div>
                <div className="eventImg">
                    <img src={require(`../../assets/images/${pic}`)} alt="" />
                </div>
            </Link>
        </div >
    );
};

export default LoadEvents;