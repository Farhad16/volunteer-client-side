import React, { useEffect, useState } from 'react';
import LoadEvents from '../LoadEvents/LoadEvents';
import './Events.css'

const Events = () => {

    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/getAllEvents')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])

    // const handleSubmit = () => {

    //     fetch('http://localhost:4000/addEvents', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify()
    //     })
    // }


    return (
        <div className="events">
            <div className="row d-flex justify-content-between">
                {
                    event.map(ev => <LoadEvents key={ev._id} event={ev}></LoadEvents>)
                }
            </div>
        </div>
    );
};

export default Events;