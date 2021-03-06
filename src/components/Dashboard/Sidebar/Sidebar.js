import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDriver, setIsDriver] = useState(false);
   
    useEffect(() => {
        fetch('http://localhost:5000/isDriver', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDriver(data));
    }, [])

    console.log('info ',isDriver);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                { isDriver && <div>
                    <li>
                        <Link to="/allCustomers" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/customer" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDriver" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Driver</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>manage</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;