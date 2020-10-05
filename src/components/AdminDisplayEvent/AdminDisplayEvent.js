import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AdminDisplayEvent.css'

const AdminDisplayEvent = (props) => {
    const { name, email, date, eventName, _id } = props.event;
    const handleDelete = props.handleDelete;
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td>{eventName}</td>
                <td onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} className="trash" /></td>
            </tr>
        </tbody>
    );
};

export default AdminDisplayEvent;