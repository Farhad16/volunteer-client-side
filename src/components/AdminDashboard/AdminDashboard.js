import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'
import logo from '../../assets/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import AdminAddEvent from '../AdminAddEvent/AdminAddEvent';
import AdminDisplayEvent from '../AdminDisplayEvent/AdminDisplayEvent';

const AdminDashboard = () => {
    const [sidebar, setSidebar] = useState(true)
    const [volunteerList, setVolunteerList] = useState([]);

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/getAllVolunteer')
            .then(res => res.json())
            .then(data => {
                setVolunteerList(data)
                setIsLoading(true);
            })
    }, [])


    const handleDelete = (id) => {
        fetch(`http://localhost:4000/deleteRegistered/${id}`, {
            method: 'DELETE',

        }).then(res => res.json())
            .then(result => {
                if (result) {
                    fetch('http://localhost:4000/getAllVolunteer')
                        .then(res => res.json())
                        .then(data => {
                            setVolunteerList(data);
                        })
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
                    sidebar ? <div className="volunteerList">
                        <h3>Registered volunteer</h3>
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
                                isLoading ? volunteerList.map(volunteer => <AdminDisplayEvent key={volunteer._id} event={volunteer} handleDelete={handleDelete}></AdminDisplayEvent>) :
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Loading....
                                                <div className="loadingVolunteer"></div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                            }
                        </table>
                    </div> :
                        <AdminAddEvent></AdminAddEvent>
                }
            </div>
        </div>
    );
};

export default AdminDashboard;