import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AdminAddEvent.css'


const AdminAddEvent = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data, e) => {
        console.log(data);
        fetch('https://murmuring-peak-07736.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        }).then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.reset();
                }
            })
    }


    return (
        <div className="addEvent">
            <h3>Add Event</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="addForm">
                <div className="addField">
                    <p className="d-flex">
                        <label htmlFor="">
                            Enent Title <br />
                            < input name="name" type="text" ref={register({ required: true })} placeholder="Title" />
                        </label>
                        <label htmlFor="">
                            Enent Date <br />
                            < input name="date" type="date" ref={register({ required: true })} placeholder="Date" />
                        </label>
                    </p>
                    <p className="d-flex">
                        <label htmlFor="">
                            Description <br />
                            < input name="desciption" type="text" ref={register({ required: true })} placeholder="Description" />
                        </label>
                        <label htmlFor="">
                            <button className="upload"><FontAwesomeIcon className="uploadIcon" icon={faCloudUploadAlt} />Upload Image</button> <br />
                        </label>
                    </p>
                </div>
                <input type="submit" className="submitBtn" />
            </form >
        </div>
    );
};

export default AdminAddEvent;