import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Driver from '../Driver/Driver';
const Drivers = () => {
    const [drivers, setDrivers] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/drivers')
        .then(res => res.json())
        .then(data => setDrivers(data))
    }, [])

    return (
        <section className="drivers">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Drivers</h5>
                <div className="row">
                    {
                     drivers.map(driver =><Driver key={driver._id} driver={driver} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Drivers;