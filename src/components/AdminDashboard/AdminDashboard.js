import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'
import logo from '../../assets/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [sidebar, setSidebar] = useState(true)
    const [volunteerList, setVolunteerList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/getAllVolunteer')
            .then(res => res.json())
            .then(data => setVolunteerList(data))
    }, [])


    const handleDelete = (id) => {
        fetch(`http://localhost:4000/deleteRegistered/${id}`, {
            method: 'DELETE',

        }).then(res => res.json())
            .then(result => {
                if (result) {
                    fetch('http://localhost:4000/getAllVolunteer')
                        .then(res => res.json())
                        .then(data => setVolunteerList(data))
                }
            })
    }

    return (
        <div className="row adminSection">
            <div className="menubar col-md-3">
                <Link to="/"><img src={logo} alt="" /></Link>
                <div className="menu">
                    <p className={sidebar ? "option active" : "option"} onClick={() => setSidebar(true)}><FontAwesomeIcon icon={faUserFriends} className="i" />Show volunteer list</p>
                    <p className={!sidebar ? "option active" : "option"} onClick={() => setSidebar(false)}> <FontAwesomeIcon icon={faPlus} className="i" />Add Event</p>
                </div>
            </div>
            <div className="adminPanel col-md-9">
                {
                    sidebar ? <div>
                        <h2>Registered volunteer</h2>
                        <div className="volunteerList">
                            <table>
                                <thead className="thead">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Registating Date</th>
                                        <th>Volunteer List</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {
                                    volunteerList.map(vt => <tbody key={vt._id}>
                                        <tr>
                                            <td>{vt.name}</td>
                                            <td>{vt.email}</td>
                                            <td>{vt.date}</td>
                                            <td>{vt.eventName}</td>
                                            <td onClick={() => handleDelete(vt._id)}><FontAwesomeIcon icon={faTrashAlt} className="trash" /></td>
                                        </tr>
                                    </tbody>)
                                }
                            </table>
                        </div>
                    </div> :
                        <div className="addEvent">
                            <h3>Add Event</h3>
                        </div>
                }
            </div>
        </div>
    );
};

export default AdminDashboard;