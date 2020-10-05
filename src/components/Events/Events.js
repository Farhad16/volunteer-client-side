import React, { useEffect, useState } from 'react';
import LoadEvents from '../LoadEvents/LoadEvents';
import './Events.css'

const Events = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/getAllEvents')
            .then(res => res.json())
            .then(data => setEvent(data));
        setIsLoading(true)

    }, [])

    return (
        <div className="events">
            <div className="row">
                {
                    isLoading ? event.map(ev => <LoadEvents key={ev._id} event={ev}></LoadEvents>) :
                        <div className="loading">
                            <h4>Loading....</h4>
                            <div className="loader"></div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Events;